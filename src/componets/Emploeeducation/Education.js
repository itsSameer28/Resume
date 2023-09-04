import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { EDUCATION_DESCRIPTION } from "../Constants";
import { ADD_OTHER_EDUCATION } from "../Constants";
const accordianInputFieldStyle = {
  width: "195px",
  marginLeft: "20px",
};

const containerStyle = {};

const addButtonStyle = {
  margin: "15px",
  color: "#66D3FA",
  cursor: "pointer",
};

const charaterLimitStyle = {
  color: "grey",
  fontSize: "12px",
};
const iconStyle = {
  display: "inline",
  color: "#66D3FA",
};
const dateStyle = {
  width: "195px",
  marginLeft: "20px",
  marginTop: "15px",
};

const textAreaStyle = {
  width: "410px",
  marginLeft: "20px",
};

const accordianStyle = {
  width: "480px",
};
const deleteIconStyle = {
  marginLeft: "auto",
  cursor: "pointer",
};
function EmployyeEducation() {
  const { userResume, setUserResume } = useContext(userContext);

  const [educationData, setEducationData] = useState([]);
  const [employeEducationCount, setEmployeEducationCount] = useState(0);

  const addEducation = () => {
    if (employeEducationCount === 0) {
      const newEducation = {
        school: "",
        degree: "",
        startDate: null,
        endDate: null,
      };
      setEducationData([newEducation]);
      setEmployeEducationCount(1);
    }
  };

  const deleteEducationData = (index) => {
    const updatededucationData = [...educationData];
    updatededucationData.splice(index, 1);
    setEducationData(updatededucationData);
    setEmployeEducationCount(0);
    setUserResume((prev) => ({
      ...prev,
      employeEducation: updatededucationData,
    }));
  };

  const handleEducationTitleChange = (event, index) => {
    const updatededucationData = [...educationData];
    updatededucationData[index].school = event.target.value;
    setEducationData(updatededucationData);
    setUserResume((prev) => ({
      ...prev,
      employeEducation: updatededucationData,
    }));
  };

  const handleStartDateChange = (date, index) => {
    const updatededucationData = [...educationData];
    updatededucationData[index].startDate = date;
    setEducationData(updatededucationData);
    setUserResume((prev) => ({
      ...prev,
      employeEducation: updatededucationData,
    }));
  };

  const handleEndDateChange = (date, index) => {
    const updatededucationData = [...educationData];
    updatededucationData[index].endDate = date;
    setEducationData(updatededucationData);
    setUserResume((prev) => ({
      ...prev,
      employeEducation: updatededucationData,
    }));
  };

  const handleEducationLinksChange = (event, index) => {
    const updatededucationData = [...educationData];
    updatededucationData[index].degree = event.target.value;
    setEducationData(updatededucationData);
    setUserResume((prev) => ({
      ...prev,
      employeEducation: updatededucationData,
    }));
  };
  const handleEmployeeDescriptionChange = (event, index) => {
    const updatededucationData = [...educationData];
    updatededucationData[index].description = event.target.value;
    setEducationData(updatededucationData);
    setUserResume((prev) => ({
      ...prev,
      employeEducation: updatededucationData,
    }));
  };

  const renderEducation = (index) => {
    return (
      <Accordion key={index} sx={accordianStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
        >
          <Typography>Education {index + 1}</Typography>
          <FontAwesomeIcon
            icon={faTrash}
            style={deleteIconStyle}
            onClick={() => deleteEducationData(index)}
          />
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="School"
            variant="filled"
            sx={accordianInputFieldStyle}
            name="socialName"
            value={educationData[index].school}
            onChange={(event) => handleEducationTitleChange(event, index)}
          />
          <TextField
            label="Degree"
            variant="filled"
            sx={accordianInputFieldStyle}
            name="socialLink"
            value={educationData[index].degree}
            onChange={(event) => handleEducationLinksChange(event, index)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              sx={dateStyle}
              inputFormat="dd/MM/yyyy"
              value={educationData[index].startDate}
              onChange={(date) => handleStartDateChange(date, index)}
            />
            <DatePicker
              label="End Date"
              inputFormat="dd/MM/yyyy"
              value={educationData[index].endDate}
              onChange={(date) => handleEndDateChange(date, index)}
              sx={dateStyle}
            />
          </LocalizationProvider>
          <br />
          <p>
            <b>Description</b>{" "}
            <div style={charaterLimitStyle}>
              {80 - (educationData[index]?.description?.length || 0)}
              {"-"}Characters left
            </div>
          </p>
          <TextField
            placeholder={EDUCATION_DESCRIPTION}
            multiline
            rows={2}
            maxRows={4}
            sx={textAreaStyle}
            value={educationData[index].description}
            onChange={(event) => handleEmployeeDescriptionChange(event, index)}
            inputProps={{ maxLength: 80 }}
          />
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Box sx={containerStyle}>
      {educationData.map((_, index) => renderEducation(index))}

      <Box sx={addButtonStyle} onClick={addEducation}>
        <b>
          {employeEducationCount === 0 && (
            <FontAwesomeIcon icon={faAdd} style={iconStyle} />
          )}{" "}
          {employeEducationCount === 0 && { ADD_OTHER_EDUCATION }}
        </b>
      </Box>
    </Box>
  );
}
export default EmployyeEducation;
