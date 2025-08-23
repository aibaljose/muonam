import React, { useEffect, useState, useRef } from 'react';
import { Html5Qrcode } from "html5-qrcode";
import { auth, db } from "./firebase";
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "./AuthProvider";

const Game = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [showClue, setShowClue] = useState("");
  const [scannedQ, setScannedQ] = useState("");
  const scannerRef = useRef(null);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        setUserData({ ...snapshot.docs[0].data(), id: snapshot.docs[0].id });
      }
    };
    fetchUserData();
  }, [user]);

  // Fetch questions
  useEffect(() => {
    const fetchQuestions = async () => {
      const docRef = doc(db, "questions", "list");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setQuestions(docSnap.data());
      }
      setLoading(false);
    };
    fetchQuestions();
  }, []);

  // QR code scanner logic
  useEffect(() => {
    let html5Qr;
    const startScanner = async () => {
      const el = scannerRef.current;
      if (!el) return;
      // Ensure the element has the correct ID
      el.id = "qr-scanner";
      html5Qr = new Html5Qrcode("qr-scanner");
      await html5Qr.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          console.log("QR scanned link:", decodedText);
          // Extract Q key from URL
          const match = decodedText.match(/\?(Q\d+)/);
          if (match) {
            const scannedKey = match[1];
            console.log("Scanned question key:", scannedKey);
            if (!userData || !userData.pathway?.order) {
              setFeedback("User pathway not loaded.");
              return;
            }
            const nextQKey = userData.pathway.order[userData.currentQuestionIndex + 1];
            if (scannedKey === nextQKey) {
              setScannedQ(scannedKey);
              setFeedback("");
            } else {
              setFeedback("Not the right QR code. Scan the correct spot for the next question.");
            }
          } else {
            setFeedback("QR code not recognized. Please scan a valid game QR code.");
          }
        },
        (errorMessage) => {}
      );
    };
    // Start scanner only after DOM is ready
    setTimeout(startScanner, 500);
    return () => {
      if (html5Qr) html5Qr.stop();
    };
  }, [userData]);

  // When QR scanned, check if matches next question
  useEffect(() => {
    if (!scannedQ) return;
    if (!userData || !userData.pathway?.order) return;
    const nextQKey = userData.pathway.order[userData.currentQuestionIndex + 1];
    if (scannedQ === nextQKey) {
      // Move to next question
      const updateProgress = async () => {
        const userRef = doc(db, "users", userData.id);
        await updateDoc(userRef, { currentQuestionIndex: userData.currentQuestionIndex + 1 });
        setUserData({ ...userData, currentQuestionIndex: userData.currentQuestionIndex + 1 });
        setAnswer("");
        setFeedback("");
        setShowClue("");
        setScannedQ("");
      };
      updateProgress();
    } else {
      setFeedback("Scan the correct QR for the next spot!");
    }
  }, [scannedQ, userData]);

  // Get current question key from pathway
  const pathwayOrder = userData && userData.pathway?.order ? userData.pathway.order : [];
  const currentIndex = userData && userData.currentQuestionIndex !== undefined ? userData.currentQuestionIndex : 0;
  const currentQKey = pathwayOrder[currentIndex];
  const currentQ = questions && currentQKey ? questions[currentQKey] : null;

  // Only return after all hooks and logic
  if (loading || !userData || !questions) return <div>Loading...</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentQ) return;
    if (answer.trim().toLowerCase() === currentQ.answer.trim().toLowerCase()) {
      setFeedback("Correct!");
      // Show clue for next question
      const nextQKey = pathwayOrder[currentIndex + 1];
      if (nextQKey) {
        // Fetch clues from Firestore
        const clueDoc = await getDoc(doc(db, "clues", "locations"));
        if (clueDoc.exists()) {
          const clues = clueDoc.data();
          setShowClue(clues[nextQKey] || "No clue available.");
        }
      }
    } else {
      setFeedback("Incorrect. Try again!");
      setShowClue("");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Question {currentIndex + 1}</h2>
      <p>{currentQ ? currentQ.text : "No more questions!"}</p>
      {currentQ ? (
        <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
          <input
            type="text"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            placeholder="Your answer"
            style={{ padding: 12, fontSize: 18, borderRadius: 8, width: 300 }}
            required
          />
          <button type="submit" style={{ marginLeft: 16, padding: 12, fontSize: 18, borderRadius: 8, background: '#bb5c5c', color: '#fff', border: 'none' }}>
            Submit
          </button>
        </form>
      ) : null}
      {showClue ? (
        <div style={{ marginTop: 24, background: '#e7b96c', padding: 16, borderRadius: 8, color: '#222', fontWeight: 600 }}>
          <span>Clue for next spot:</span>
          <p>{showClue}</p>
        </div>
      ) : null}
      <div style={{ marginTop: 32 }}>
        <h3>Scan the QR code at your next spot:</h3>
        <div id="qr-scanner" ref={scannerRef} style={{ width: 300, height: 300, margin: 'auto', background: '#222', borderRadius: 8 }}></div>
      </div>
      {feedback ? <p style={{ marginTop: 16, fontWeight: 600 }}>{feedback}</p> : null}
      {!currentQ ? <h3>Congratulations! You finished the hunt!</h3> : null}
    </div>
  );
};

export default Game;
