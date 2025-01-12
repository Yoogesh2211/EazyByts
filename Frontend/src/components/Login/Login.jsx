import React from "react";
import { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const sendLogin=()=>{
    if(props.join==""){
      axios.post('http://localhost:3000/', {
        accountAccess:true,
        userEmail:{email},
        userPassword: {password},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  const PasswordError = () => {
    return (
      <p className="FieldError">Password should have at least 10 characters</p>
    );
  };

  const formValiditiy = () => {
    return email && password;
  };

  const clearLoginForm = () => {
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    alert("Logged In");
    clearLoginForm();
    sendLogin()
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="loginbg">
          <div className="loginTitle">
            <div>Login</div>
          </div>
          <div className="logindetails">
            <div className="Field">
              <label>
                Email <sup>*</sup>
              </label>
              <input
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                placeholder="Enter password"
                type="password"
                value={password.value}
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value });
                }}
                onBlur={(e) => {
                  setPassword({ ...password, isTouched: true });
                }}
              />
            </div>
            {password.isTouched && password.value.length < 10 ? (
              <PasswordError />
            ) : null}
          </div>
          <div className="submitbutton">
            <button type="submit" disabled={!formValiditiy()}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
