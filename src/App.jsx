import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import Home from "./home"
import Login from "./login"
import Signup from './signup';
import ProtectedRoute from "./ProtectedRoute";
import Game from "./game";

import AddDatat from './adddatat';
import { AuthProvider } from './AuthProvider';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-data" element={<AddDatat />} />
          <Route path="/game" element={<ProtectedRoute>
            <Game />
          </ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
