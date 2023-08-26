import React, { useState } from "react";
import "./Signin.css";
import Signup from "../Signup/Signup";

function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [signin, setsignin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", pass);
  };
  function signinhandler() {
    setsignin(true);
  }
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <br />
      {!signin && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={handlePassChange}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
          <br />
          <button type="submit">Sign In</button>
        </form>
      )}
      {signin && <Signup />}
      <br />
      <button>Don't have an account? Sign Up</button>
    </div>
  );
}

export default Signin;
