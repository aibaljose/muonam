const questions = {
	Q1: { text: "What is the first building you enter in the college?", answer: "Entrance Gate" },
	Q2: { text: "Where can you find all the books in the college?", answer: "Library" },
	Q3: { text: "Which place hosts basketball matches?", answer: "Basketball Court" },
	Q4: { text: "Where do students work on computers in labs?", answer: "Computer Lab" },
	Q5: { text: "Which tree is famous for gatherings and shade in the campus?", answer: "Banyan Tree" },
	Q6: { text: "Where do chemistry experiments happen?", answer: "Chemistry Lab" },
	Q7: { text: "Which place hosts all the main events and programs?", answer: "Main Auditorium" },
	Q8: { text: "Where is the quiet space behind the auditorium?", answer: "Behind the Auditorium" },
	Q9: { text: "Where does the principal have their office?", answer: "Principal's Office" },
	Q10: { text: "Where do students eat and gather during breaks?", answer: "Canteen" },
	Q11: { text: "Where do students park their vehicles?", answer: "Parking Lot" },
	Q12: { text: "Which building hosts the student dormitories?", answer: "Hostel" },
	Q13: { text: "Which spot has water and decorative surroundings?", answer: "Garden Fountain" },
	Q14: { text: "Where are football matches played?", answer: "Football Ground" },
	Q15: { text: "Where are seminars and talks conducted?", answer: "Seminar Hall" },
	Q16: { text: "Which place gives a view of the campus from above?", answer: "Rooftop Terrace" },
	Q17: { text: "Where is the national flag hoisted in the campus?", answer: "Flag Pole" },
	Q18: { text: "Which room hosts the science exhibition?", answer: "Science Exhibition Room" },
	Q19: { text: "Which corridor has murals on the walls?", answer: "Corridor with Murals" },
	Q20: { text: "Where can you collect your treasure or prize?", answer: "Prize Desk" },
};

const addQuestionsData = async () => {
	try {
		await setDoc(doc(db, "questions", "list"), questions);
		alert("Questions data added to Firestore!");
	} catch (err) {
		alert("Error adding questions: " + err.message);
	}
};
const clues = {
	Q1: "Clue: Entrance Gate.",
	Q2: "Clue: College Library.",
	Q3: "Clue: Basketball Court.",
	Q4: "Clue: Computer Lab.",
	Q5: "Clue: Under the Banyan Tree.",
	Q6: "Clue: Chemistry Lab.",
	Q7: "Clue: Main Auditorium Stage.",
	Q8: "Clue: Behind the Auditorium.",
	Q9: "Clue: Principal’s Office Door.",
	Q10: "Clue: College Canteen.",
	Q11: "Clue: Parking Lot.",
	Q12: "Clue: Hostel Entrance.",
	Q13: "Clue: Garden Fountain.",
	Q14: "Clue: Football Ground.",
	Q15: "Clue: Seminar Hall.",
	Q16: "Clue: Rooftop Terrace.",
	Q17: "Clue: Near the Flag Pole.",
	Q18: "Clue: Science Exhibition Room.",
	Q19: "Clue: Corridor with Murals.",
	Q20: "Clue: Final Spot – Prize Desk 🎉",
};

const addCluesData = async () => {
	try {
		await setDoc(doc(db, "clues", "locations"), clues);
		alert("Clues data added to Firestore!");
	} catch (err) {
		alert("Error adding clues: " + err.message);
	}
};
import React from "react";
import { db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";

const pathways = {
	path1: ["Q5","Q8","Q3","Q12","Q10","Q1","Q7","Q2","Q9","Q4","Q6","Q11","Q13","Q14","Q15","Q16","Q17","Q18","Q19","Q20"],
	path2: ["Q2","Q14","Q1","Q6","Q9","Q3","Q8","Q5","Q10","Q7","Q4","Q11","Q12","Q13","Q15","Q16","Q17","Q18","Q19","Q20"],
	path3: ["Q1","Q3","Q5","Q7","Q9","Q2","Q4","Q6","Q8","Q10","Q11","Q12","Q13","Q14","Q15","Q16","Q17","Q18","Q19","Q20"],
	path4: ["Q4","Q8","Q12","Q16","Q3","Q7","Q11","Q15","Q19","Q1","Q5","Q9","Q13","Q17","Q2","Q6","Q10","Q14","Q18","Q20"],
	path5: ["Q2","Q5","Q8","Q11","Q14","Q1","Q4","Q7","Q10","Q13","Q3","Q6","Q9","Q12","Q15","Q16","Q17","Q18","Q19","Q20"],
	path6: ["Q1","Q3","Q6","Q9","Q12","Q2","Q4","Q5","Q7","Q10","Q8","Q11","Q13","Q14","Q15","Q16","Q17","Q18","Q19","Q20"],
	path7: ["Q7","Q10","Q13","Q16","Q19","Q1","Q4","Q8","Q11","Q14","Q2","Q5","Q9","Q12","Q15","Q3","Q6","Q17","Q18","Q20"],
	path8: ["Q4","Q8","Q12","Q16","Q3","Q7","Q11","Q15","Q19","Q2","Q6","Q10","Q14","Q18","Q1","Q5","Q9","Q13","Q17","Q20"],
	path9: ["Q2","Q5","Q8","Q11","Q14","Q1","Q4","Q7","Q10","Q13","Q3","Q6","Q9","Q12","Q15","Q16","Q17","Q18","Q19","Q20"],
	path10:["Q7","Q13","Q15","Q4","Q11","Q1","Q3","Q5","Q8","Q10","Q2","Q6","Q9","Q12","Q14","Q16","Q17","Q18","Q19","Q20"]
};

const addSampleData = async () => {
	try {
		await setDoc(doc(db, "pathway_order", "pathways"), pathways);
		alert("Sample pathways data added to Firestore!");
	} catch (err) {
		alert("Error adding data: " + err.message);
	}
};

const AddDatat = () => {
	return (
		<div style={{ padding: 40 }}>
					<button onClick={addSampleData} style={{ padding: 16, fontSize: 18, borderRadius: 8, background: '#bb5c5c', color: '#fff', border: 'none', marginRight: 16 }}>
						Add Sample Pathways to Firestore
					</button>
					<button onClick={addCluesData} style={{ padding: 16, fontSize: 18, borderRadius: 8, background: '#e7b96c', color: '#222', border: 'none', marginRight: 16 }}>
						Add Clues to Firestore
					</button>
					<button onClick={addQuestionsData} style={{ padding: 16, fontSize: 18, borderRadius: 8, background: '#5cbb7a', color: '#fff', border: 'none' }}>
						Add Questions to Firestore
					</button>
		</div>
	);
};

export default AddDatat;
