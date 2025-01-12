import React, { useState, useMemo } from "react";
import Select from 'react-select';
import countryList from 'react-select-country-list'
import "./Signup.css";
import axios from "axios";

const Signup = (props) => {

  const countryOptions = useMemo(() => countryList().getData(), []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const userPassword=password.value;

  

  const sendSignup=()=>{
    if(props.join =="active"){
      axios.post('http://localhost:3000/', {
        accountAccess:false,
        userEmail:{email},
        userName:{name},
        userCity:{city},
        userCountry:{country},
        userPhone:{phone},
        userPassword:{userPassword},
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
    return (name&&email&&country&&city&&password.value.length>=10);
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setCity("");
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    console.log(name, email, phone, country, city, password);
    e.preventDefault();
    alert("Account Created");
    clearForm();
    sendSignup();
    props.setJoin("");
    console.log(name, email, phone, country, city, password);
  };

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <div className="SignUpbg">
          <div className="SignUpTitle">
            <div>Create a New Account</div>
          </div>
          <div className="SignUpdetails">
            <div className="Field">
              <label>
                Name <sup>*</sup>
              </label>
              <input
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
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
              <label>Phone No</label>
              <input
                placeholder="Enter Phone No"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="Field">
              <label>
                Country <sup>*</sup>
              </label>
              <Select
                className="Options"
                options={countryOptions}
                value={country}
                onChange={(e) => {
                  setCountry(e);
                }}
              />
            </div>
            <div className="Field">
              <label>
                City <sup>*</sup>
              </label>
              <input
                placeholder="Enter City"
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className="Field">
              <label>
                Create Password <sup>*</sup>
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
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
