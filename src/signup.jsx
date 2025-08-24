import React, { useState, useEffect } from 'react';
import "./home.css";
import { useNavigate } from "react-router-dom";
import maveli from "./assets/Maveli-12.png";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phno: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (auth.currentUser) {
      navigate("/game");
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      // 1. Create user with email/password
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      // 2. Fetch pathways from Firestore
      const pathwaysDoc = await getDoc(doc(db, "pathway_order", "pathways"));
      let assignedPathway = null;
      if (pathwaysDoc.exists()) {
        const pathwaysData = pathwaysDoc.data();
        const keys = Object.keys(pathwaysData);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        assignedPathway = { key: randomKey, order: pathwaysData[randomKey] };
      }
      // 3. Save user data with assigned pathway
      await addDoc(collection(db, "users"), {
  uid: userCredential.user.uid,
  name: form.name,
  email: form.email,
  phno: form.phno,
  password: form.password,
  pathway: assignedPathway,
  addno: form.addno,
  currentQuestionIndex: 0
      });
      setLoading(false);
      navigate("/login");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Mu-onam Register </p>
        <p className="message">Register to hunt the puli </p>
        <label>
          <input required placeholder type="text" className="input" name="name" value={form.name} onChange={handleChange} />
          <span>Name</span>
        </label>
        <label>
          <input required placeholder type="email" className="input" name="email" value={form.email} onChange={handleChange} />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="number" className="input" name="phno" value={form.phno} onChange={handleChange} />
          <span>Ph No</span>
        </label>
          <label>
          <input required placeholder type="number" className="input" name="addno" value={form.addno} onChange={handleChange} />
          <span>Admission No</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" name="password" value={form.password} onChange={handleChange} />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
          <span>Confirm password</span>
        </label>
        {error && <p style={{ color: "#bb5c5c", marginBottom: "8px" }}>{error}</p>}
        <button className="submit" type="submit" disabled={loading}>{loading ? "Registering..." : "Submit"}</button>
        <p className="signin">Already have an acount ? <a onClick={handleClick}>Login</a> </p>
      </form>
    </div>
  );
};

export default Signup;
