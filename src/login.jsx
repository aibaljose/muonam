import React from 'react'
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
    navigate("/signup");
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
      setError(err.message);
      setLoading(false);
    }
  };

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
        <p className="signin">Don't have an account? <a href="/signup">Signup</a></p>
      </form>
      <div className="bottom-img-container" style={{bottom:"-200px",zIndex: "0"}}>
        <img src={maveli} alt="Bottom Image" />
      </div>
    </div>
  );
};

export default Login;
