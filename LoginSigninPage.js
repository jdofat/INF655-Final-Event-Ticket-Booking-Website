/*
Login and Signup Page:
1. Allow users to register and log in using Firebase Authentication (email/password)
*/

import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginSigninPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
      </form>
      <p style={{ color: "red" }}>{error}</p>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Sign Up" : "Log In"}
      </button>
    </div>
  );
};

export default LoginSigninPage;
