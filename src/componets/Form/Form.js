import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SocialLinks from "../SocialLinks/SocialLinks";
import EmployementHistory from "../EmployementHistory/EmployementHistory";
import Education from "../Emploeeducation/Education";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import Skills from "../Skills/Skills";
import { useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const divStyle = {
  backgroundColor: "white",
  marginRight: "15px",
  width: "50vw",
  padding: "20px",
};
const progressBarStyle = {
  height: "35px",
  width: "46.7vw",
  position: "fixed",
  top: 0,
  left: 36,
  zIndex: 999,
};
const boxOneStyle = {
  padding: "49px",
  "& > :not(style)": { m: 1 },
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
};
const accordianStyle = {
  width: "480px",
  zIndex: "998",
  boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
};
const lastBoxStyle = {
  "& > :not(style)": { m: 1, width: "50vw" },
};
const textFieldOneStyle = { width: "180px" };
const textFieldTwoStyle = { width: "180px", marginLeft: "60px" };
const textFieldThirdStyle = { width: "180px", marginTop: "15px" };
const textFieldfourthStyle = {
  width: "180px",
  marginLeft: "60px",
  marginTop: "15px",
};
const paragraphStyle = { color: "gray" };
const inputPropsStyle = { maxLength: 80 };
const Form = () => {
  const { userResume, setUserResume } = useContext(userContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const requiredFields = [
        userResume.firstName,
        userResume.lastName,
        userResume.designation,
        userResume.email,
        userResume.mobile,
        userResume.about,
        userResume.city,
        userResume.languages,
        userResume.country,
        userResume.nationality,
        userResume.postalCode,
        userResume.address,
        userResume?.userLinks?.length > 0,
        userResume?.employeEducation?.length > 0,
        userResume?.employeHistory?.length >= 2,
        userResume?.skills[0]?.length >= 3,
      ];

      const filledFieldsCount = requiredFields.filter((field) => field).length;
      const requiredFieldsCount = requiredFields.length;

      const calculatedProgress =
        (filledFieldsCount / requiredFieldsCount) * 100;
      setProgress(calculatedProgress);
    };

    calculateProgress();
  }, [userResume]);

  const handleValues = (event) => {
    setUserResume((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div style={divStyle} noValidate autoComplete="off">
      <LinearProgress
        variant="determinate"
        color="primary"
        value={progress}
        sx={progressBarStyle}
      />{" "}
      <Box sx={boxOneStyle} noValidate autoComplete="off">
        <Typography>
          <b>Personal Details* </b>
        </Typography>
        <TextField
          id="standard-basic"
          label="Enter Your First Name"
          variant="filled"
          name="firstName"
          onChange={handleValues}
        />
        <TextField
          id="standard-basic"
          label="Enter Your Last Name"
          variant="filled"
          name="lastName"
          onChange={handleValues}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Wanted a job Designation?*"
          variant="filled"
          name="designation"
          onChange={handleValues}
        />
        <TextField
          id="standard-basic"
          label="About YourSelf"
          variant="filled"
          name="about"
          onChange={handleValues}
          inputProps={inputPropsStyle}
        />
        <Typography>
          <b>Contact Information*</b>
        </Typography>
        <TextField
          id="standard-basic"
          label="Contact No."
          variant="filled"
          name="mobile"
          onChange={handleValues}
        />
        <TextField
          id="standard-basic"
          label="Your Email"
          variant="filled"
          name="email"
          onChange={handleValues}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Country"
          variant="filled"
          name="country"
          onChange={handleValues}
        />
        <TextField
          id="standard-basic"
          label="City"
          variant="filled"
          name="city"
          onChange={handleValues}
        />
        <br />
        <Accordion sx={accordianStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <b>Add More Details</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="standard-basic"
              label="Languages"
              variant="filled"
              name="languages"
              sx={textFieldOneStyle}
              onChange={handleValues}
            />

            <TextField
              id="standard-basic"
              label="Nationality"
              variant="filled"
              name="nationality"
              sx={textFieldTwoStyle}
              onChange={handleValues}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Postal Code"
              variant="filled"
              name="postalCode"
              sx={textFieldThirdStyle}
              onChange={handleValues}
            />
            <TextField
              id="standard-basic"
              label="Address"
              variant="filled"
              name="address"
              sx={textFieldfourthStyle}
              onChange={handleValues}
            />
          </AccordionDetails>
        </Accordion>
        <br />
        <p>
          <b>Employment History*</b>
        </p>
        <p style={paragraphStyle}></p>
        <EmployementHistory />
        <br />
        <br />
        <p>
          <b>Education*</b>
        </p>
        <p style={paragraphStyle}>
          A varied Education on your resumes sum ups the value that you
          <br /> learning and background will bring to job.
        </p>{" "}
        <Education />
        <br></br>
        <p>
          <b>Websites & Social Links</b>
        </p>
        <p style={paragraphStyle}>
          You can add Links to websites you want to hiring managers to see!
          Perhaps it will be links to your potfolio.Linkedin or personal Webs-
          <br />
          -ites.
        </p>
        <SocialLinks />
        <Box sx={lastBoxStyle} noValidate autoComplete="off">
          <Skills />
        </Box>
      </Box>
    </div>
  );
};

export default Form;
