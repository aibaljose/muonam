import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import Home from "./home"
import Login from "./login"
import Signup from './signup';
import ProtectedRoute from "./ProtectedRoute";
import Game from "./game";
import LandingPage from './landingpage';
import Instructions from './instructions';
import AddDatat from './adddatat';
import Dashboard from './Dashboard';
import { AuthProvider } from './AuthProvider';
const App = () => {
  useEffect(() => {
    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      // Show the install prompt immediately
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("✅ User accepted the install prompt");
        } else {
          console.log("❌ User dismissed the install prompt");
        }
        deferredPrompt = null;
      });
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Signup />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/add-data" element={<AddDatat />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/game" element={<ProtectedRoute>
            <Game />
          </ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
