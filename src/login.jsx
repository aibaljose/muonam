import React, { useEffect } from 'react'
import "./home.css"
import { useNavigate } from "react-router-dom";
import maveli from "./assets/Maveli-12.png";

import  { useState } from 'react';
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    await signInWithEmailAndPassword(auth, form.email, form.password);
    setLoading(false);
    navigate("/"); // Redirect to home or dashboard
  } catch (err) {
    // Map error codes to custom messages
    let message = "Something went wrong. Please try again.";

    switch (err.code) {
      case "auth/invalid-email":
        message = "Please enter a valid email address.";
        break;
      case "auth/user-disabled":
        message = "This account has been disabled. Contact support.";
        break;
      case "auth/user-not-found":
        message = "No account found with this email.";
        break;
      case "auth/wrong-password":
        message = "Incorrect password. Please try again.";
        break;
      case "auth/too-many-requests":
        message = "Too many failed attempts. Please wait and try later.";
        break;
      default:
        message = "Login failed. Check your details and try again.";
    }

    setError(message);
    setLoading(false);
  }
};

  // Redirect if already logged in
  useEffect(() => {
    if (auth.currentUser) {
      navigate("/game");
    }
  }, []);

  return (
    <div>
      <form className="form" style={{marginBottom: "200px"}} onSubmit={handleSubmit}>
        <p className="title">Mu-onam Login </p>
        <p className="message">Register to hunt the puli </p>
        <label>
          <input required placeholder type="email" className="input" name="email" value={form.email} onChange={handleChange} />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" name="password" value={form.password} onChange={handleChange} />
          <span>Password</span>
        </label>
        {error && <p style={{ color: "#bb5c5c", marginBottom: "8px" }}>{error}</p>}
        <button className="submit" type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        <p className="signin">Don't have an account? <a onClick={handleClick}>Signup</a></p>
      </form>
      <div className="bottom-img-container" style={{bottom:"-200px",zIndex: "0"}}>
        <img src={maveli} alt="Bottom Image" />
      </div>
    </div>
  );
};

export default Login;
