import React from "react";
import { useState, useMemo } from "react";
import "./Header.css";
import DatePicker from "react-datepicker";
import Select from "react-select";
import countryList from "react-select-country-list";

const Header = (props) => {
  const countryOptions = useMemo(() => countryList().getData(), []);
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [graduationdate, setGraduationDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [section, setSection] = useState("details");

  const changeContents = () => {
    if (props.nav == "Portfolio") {
      return <div>Portfolio</div>;
    } else if (props.nav == "Portfolio Themes") {
      return <div></div>;
    } else if (props.nav == "Portfolio Details") {
      if (section == "details") {
        return (
          <div className="details">
            <div className="personalDetails">
              <div className="detailHeading">Personal Details</div>
              <div className="name">
                <div className="firstName" style={{ padding: ".4rem" }}>
                  <div>First Name</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="middleName" style={{ padding: ".4rem" }}>
                  <div>Middle Name</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="lastName" style={{ padding: ".4rem" }}>
                  <div>Last Name</div>
                  <input placeholder="Enter here" />
                </div>
              </div>
              <div className="city" style={{ padding: ".4rem" }}>
                <div>City</div>
                <input placeholder="Enter here" />
              </div>
              <div className="country" style={{ padding: ".4rem" }}>
                <div>Country</div>
                <Select
                  className="Options"
                  options={countryOptions}
                  value={country}
                  onChange={(e) => {
                    setCountry(e);
                  }}
                />
              </div>
              <div className="address" style={{ padding: ".4rem" }}>
                <div>Add Address</div>
                <textarea rows="3" style={{width:"100%"}}/>
              </div>
            </div>
            <div className="educationalDetails">
              <div className="detailHeading">Educational Details</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: ".4rem",
                }}
              >
                <div className="instituteName" style={{ padding: ".4rem" }}>
                  <div>School/College</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="degree" style={{ padding: ".4rem" }}>
                  <div>Class/Degree</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="fieldDetail" style={{ padding: ".4rem" }}>
                  <div>Field of Study</div>
                  <input placeholder="Enter here" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: ".4rem",
                }}
              >
                <div className="graduationDate" style={{ padding: ".4rem" }}>
                  <div>Graduation Date</div>
                  <DatePicker
                    selected={graduationdate}
                    onChange={(graduationdate) =>
                      setGraduationDate(graduationdate)
                    }
                  />
                </div>
                <div className="percentage" style={{ padding: ".4rem" }}>
                  <div>Percentage/CGPA</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="location" style={{ padding: ".4rem" }}>
                  <div>Location</div>
                  <input placeholder="Enter here" />
                </div>
              </div>
            </div>
            <div className="WorkDetails">
              <div className="detailHeading">Work Experience</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: ".4rem",
                }}
              >
                <div className="companyName" style={{ padding: ".4rem" }}>
                  <div>Company Name</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="jobTitle" style={{ padding: ".4rem" }}>
                  <div>Job Title</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="jobDuration" style={{ padding: ".4rem" }}>
                  <div>Duration</div>
                  <DatePicker
                    selected={startDate}
                    onChange={(startDate) => setStartDate(startDate)}
                  />
                </div>
              </div>
              <div
                className="jobHighlight"
                style={{ padding: ".4rem .4rem .4rem .8rem" }}
              >
                <div>Work Highlights</div>
                <textarea rows="5" style={{width:"100%"}}/>
              </div>
            </div>
            <div className="projectDetails">
              <div className="detailHeading">ADD Projects</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: ".4rem",
                }}
              >
                <div className="ProjectTitle" style={{ padding: ".4rem" }}>
                  <div>Project Title</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="techUsed" style={{ padding: ".4rem" }}>
                  <div>Technology Used</div>
                  <input placeholder="Enter here" />
                </div>
                <div className="duration" style={{ padding: ".4rem" }}>
                  <div>Duration</div>
                  <input placeholder="Enter here" />
                </div>
              </div>
              <div
                className="projectlinks"
                style={{ padding: ".4rem .4rem .4rem .8rem" }}
              >
                <div>Github link</div>
                <input placeholder="Enter here" />
              </div>
              <div
                className="highlights"
                style={{ padding: ".4rem .4rem .4rem .8rem" }}
              >
                <div>Projects highlights</div>
                <textarea rows="3" style={{width:"100%"}}/>
              </div>
            </div>
            <div className="contactDetails">
              <div className="detailHeading">Contact Details</div>
              <div
                className="email"
                style={{ padding: ".4rem .4rem .4rem .8rem" }}
              >
                <div>Email</div>
                <input placeholder="Enter here" />
              </div>
              <div
                className="phoneno"
                style={{ padding: ".4rem .4rem .4rem .8rem" }}
              >
                <div>Phone no</div>
                <input placeholder="Enter here" />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="blog">
            <div className="aboutme">
              <div style={{backgroundColor:"rgba(118, 211, 205, 0.5)"}}>About me</div>
              <div style={{display:"flex",justifyContent:"center"}}>
                <textarea rows="10" style={{width:"100%"}}/>
              </div>
            </div>
            <div className="hireme">
              <div style={{backgroundColor:"rgba(118, 211, 205, 0.5)"}}>Hire Me</div>
              <div style={{display:"flex",justifyContent:"center"}}>
                <textarea rows="10" style={{width:"100%"}}/>
              </div>
            </div>
          </div>
        );
      }
    } else if (props.nav == "Notifications") {
      return <div>Notifications</div>;
    } else if (props.nav == "Settings") {
      return <div>Settings</div>;
    } else if (props.nav == "SignOut") {
      return <div>SignOut</div>;
    }
  };
  return (
    <div className="Header">
      <div className="Header_title">{props.nav}</div>
      {props.nav == "Portfolio Details" ? (
        <div className="editBox">
          <button
            onClick={() => {
              setSection("details");
            }}
          >
            Edit details
          </button>
          {section == "details" ? (
            <div>Details Section</div>
          ) : (
            <div>Blogs Section</div>
          )}
          <button
            onClick={() => {
              setSection("blogs");
            }}
          >
            Edit blogs
          </button>
        </div>
      ) : null}
      <div className="Header_main">{changeContents()}</div>
    </div>
  );
};

export default Header;
