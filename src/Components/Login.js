import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import "./login.css";
function Login() {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const signIn = (e)=>{
   e.preventDefault();
  }
  
  const register = (e)=>{
    
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
          <button type='submit' className="login__signInButton" onClick={signIn}>Sign in</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
