    <div className="details">
        <div className="personalDetails">
            <div className="detailHeading">Personal Details</div>
            <div className="name">
                <div className="firstName">
                    <div>First Name</div>
                    <input placeholder="Enter here" />
                </div>
                <div className="middleName">
                    <div>Middle Name</div>
                    <input placeholder="Enter here" />
                </div>
                <div className="lastName">
                    <div>Last Name</div>
                    <input placeholder="Enter here" />
                </div>
            </div>
            <div className="city">
                <div>City</div>
                <input placeholder="Enter here" />
            </div>
            <div className="country">
                <div>Country</div>
                <Select className="Options" options={countryOptions} value={country} onChange={(e) => {setCountry(e)}}/>
            </div>
            <div className="address">
                <div>Add Address</div>
                <input placeholder="Enter here" />
            </div>
        </div>
        <div className="educationalDetails">
            <div className="detailHeading">Educational Details</div>
            <div style={{display: "flex",justifyContent: "space-between",paddingLeft: ".4rem",}}>
            <div className="instituteName">
                <div>School/College Name</div>
                <input placeholder="enter the institute name" />
            </div>
            <div className="degree">
                <div>Class/Degree</div>
                <input placeholder=" enter the Class or Degree" />
            </div>
            <div className="fieldDetail">
                <div>Field of Study</div>
                <input placeholder=" enter the field of Study" />
            </div>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",paddingLeft: ".4rem",}}>
                <div className="graduationDate">
                    <div>Graduation Date</div>
                    <DatePicker selected={graduationdate} onChange={(graduationdate) =>setGraduationDate(graduationdate)}/>
                </div>
                <div className="percentage">
                    <div>Percentage/CGPA</div>
                    <input placeholder=" enter the percentage or CGPA" />
                </div>
                <div className="location">
                    <div>Location</div>
                    <input placeholder=" enter the location of School/Institute" />
                </div>
            </div>
        </div> 
        <div className="WorkDetails">
            <div className="detailHeading">Work Experience</div>
            <div style={{display: "flex",justifyContent: "space-between",paddingLeft: ".4rem",}}>
            <div className="companyName">
                <div>Company Name</div>
                <input placeholder=" enter the company name" />
            </div>
            <div className="jobTitle">
                <div>Job Title</div>
                <input placeholder=" enter your job role" />
            </div>
            <div className="jobStartDate">
                <div>Start Date</div>
                <DatePicker selected={startDate} onChange={(startDate) => setStartDate(startDate)}/>
            </div>
            </div>
            <div style={{display: "flex",justifyContent: "space-between",paddingLeft: ".4rem",}}>
            <div className="jobEndDate">
                <div>End Date</div>
                <DatePicker selected={endDate} onChange={(endDate) => setStartDate(endDate)}/>
            </div>
            <div className="jobHighlight">
                <p>
                    <input />
                </p>
            </div>
            </div>
       </div>
       <div className="projectDetails">
            <div className="detailHeading">ADD Projects</div>
            <div className="ProjectTitle">
                <div>Project Title</div>
                <input placeholder="enter the title of the project" />
            </div>
            <div className="techUsed">
                <div>Technology Used</div>
                <input placeholder="enter the title of the project" />
            </div>
            <div className="duration">
                <div>Duration</div>
                <input placeholder="enter the title of the project" />
            </div>
            <div className="highlights">
                <div>Projects highlights</div>
                <input placeholder="enter the title of the project" />
            </div>
            <div className="projectlinks">
                <div>Github link</div>
                <input placeholder="enter the title of the project" />
            </div>
        </div>
        <div className="contactDetails">
            <div className="detailHeading">Contact Details</div>
            <div className="email">
                <div>Email</div>
                <input placeholder="add an email id" />
            </div>
            <div className="phoneno">
                <div>Phone no</div>
                <input placeholder="add a phone number" />
            </div>
        </div>
        <div className="blog">
            <div>Blogs section</div>
            <div className="aboutme">
                <div>About me</div>
                <input placeholder="introduce yourself" />
            </div>
            <div className="hireme">
                <div>Hire Me</div>
                <input placeholder="Let's connect" />
            </div>
        </div>
    </div>