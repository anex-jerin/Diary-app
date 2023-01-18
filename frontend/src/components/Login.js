import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };    
  return (
    <main className="App">
      <section className="main">
        <h1 className="head">Login</h1>
        <form onSubmit={handleSubmit} className="registerform">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            id="pwd"
            autoComplete="off"
            required
            onChange={(e) => setPwd(e.target.value)}
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
