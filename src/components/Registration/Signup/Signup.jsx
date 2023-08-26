import React from "react";
import { useState } from "react";
import "./Signup.css";

import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMessage,setErrorMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass !== confirmPass) {
      setErrorMessage("Passwords do not match");
    } else {
      console.log("Sign-up: ", name, email, pass);
      setName("");
      setEmail("");
      setPass("");
      setConfirmPass("");
      setErrorMessage("");
    }
  };
  return (
    <>
      <div className="signup-container">
        <h2>Sign UP</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="full name"
            id="name"
            name="name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
          <br />
          <label htmlFor="confirmPass">Confirm Password</label>
          <input
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            placeholder="confirm password"
            id="confirmPass"
            name="confirmPass"
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>

        <br />
        <button>Have an account? Sign In</button>
      </div>
    </>
  );
}

export default Signup;
