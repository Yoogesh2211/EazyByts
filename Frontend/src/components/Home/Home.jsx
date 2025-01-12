import React, { useState } from "react";
import "./Home.css";
import pd from "../../assets/logos/PortfoliodekhoLogo.png";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Home = () => {
  
  const [join, setJoin] = useState("");

  return (
    <div className="home">
      <div className="homeHeader">
        <div className="homeHeader_field" style={{ backgroundColor: "white" }}>
          <div className="homeHeader_field1" />
        </div>
        <div className="homeHeader_bg">
          <div>
            <img className="homeHeader_logo" src={pd} />
          </div>
        </div>
        <div
          className="homeHeader_field"
          style={{ backgroundColor: "rgba(203,244,239,255)" }}
        >
          <div className="homeHeader_field2" />
        </div>
      </div>
      <div className="homeMain">
        <div className="gettingStarted">
          <div className="welcome">
            <div className="gettingStartedbg">
              <div className="joinNow">
                <div className="greeting">
                  Welcome to PortfolioDekho! We're thrilled to have you here. To
                  unlock a world of creativity and design, we encourage you to
                  create an account with us. By signing up, you'll gain access
                  to a variety of stunning portfolio templates that cater to
                  diverse styles and needs, empowering you to craft a
                  personalized portfolio that truly reflects your unique
                  talents. Join our community today and take the first step
                  towards showcasing your work in an impressive and professional
                  manner!
                </div>
                <div className="join">
                  <button
                    onClick={() => {
                      setJoin("active");
                    }}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {join == "active" ? (
          <Signup join={join} setJoin={setJoin}/>
        ) : (
          <Login join={join}/>
        )}
      </div>
    </div>
  );
};

export default Home;
