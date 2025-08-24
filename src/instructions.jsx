import React from "react";
import "./instructions.css";

const steps = [
  { id: 1, title: "Look Around the Campus", desc: "QR codes are hidden in different locations." },
  { id: 2, title: "Scan Any QR Code to Get Started", desc: "This will take you to the login page." },
  { id: 3, title: "Login to the Website", desc: "Enter your details to begin the hunt." },
  { id: 4, title: "Get Your Clue", desc: "Each scanned QR reveals a clue to the next location." },
  { id: 5, title: "Follow the Trail", desc: "Keep scanning QR codes at each new spot." },
  { id: 6, title: "Race to the Finish", desc: "The first one to scan all QR codes wins." },
];

const generalInstructions = [
  "📶 Ensure you have a good internet connection.",
  "💾 Your progress will be saved so you can resume later.",
  "⚠️ No password reset — remember your password.",
  "📞 For urgent help, contact: 9846957010.",
  "🔍 Use the in-app QR scanner only.",
  "⏳ It may take 5–10 seconds to detect a QR code — be patient.",
  "📝 Answer in English with correct spelling.",
  "📲 After finishing, join the WhatsApp group.",
  "🏆 Winners will be announced on 28th, based on finish time.",
];

const Instructions = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">Mu-Onam Treasure Hunt</h1>
        <h2 className="subtitle">Instructions</h2>
      </header>
  <div className="general-instructions">
        <h2 className="subtitle">General Guidelines</h2>
        <ul>
          {generalInstructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="steps-container" style={{ marginTop: "20px" }}>
        <div className="step start">🚩 Start</div>

        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-number">{step.id}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}

        <div className="step end">🏁 End</div>
      </div>

    
    </div>
  );
};

export default Instructions;
