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
import { EMPLOYEE_HISTORY_DESCRIPTION } from "../Constants";
import { ADD_OTHER_TWO_EMPLOYEE_HISTORY } from "../Constants";
const accordianInputFieldStyle = {
  width: "195px",
  marginLeft: "20px",
};

const addButtonStyle = {
  margin: "15px",
  color: "#66D3FA",
  cursor: "pointer",
};
const charaterLimitStyle = {
  color: "grey",
  fontSize: "12px",
};
const accordianStyle = {
  width: "480px",
};
const deleteIconStyle = {
  marginLeft: "auto",
  cursor: "pointer",
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
const iconStyle = {
  display: "inline",
  color: "#66D3FA",
};

function EmployeeHistory() {
  const { userResume, setUserResume } = useContext(userContext);
  const [employeeHistoryData, setEmployeeHistoryData] = useState([]);
  const [employeeHistoryCount, setEmployeeHistoryCount] = useState(0);

  const addEmployeeHistory = () => {
    if (employeeHistoryCount < 2) {
      const newEmployeeHistory = {
        jobTitle: "",
        employer: "",
        startDate: null,
        endDate: null,
        description: "",
      };
      setEmployeeHistoryData([...employeeHistoryData, newEmployeeHistory]);
      setEmployeeHistoryCount(employeeHistoryCount + 1);
    }
  };

  const deleteEmployeeHistory = (index) => {
    const updatedEmployeeHistoryData = [...employeeHistoryData];
    updatedEmployeeHistoryData.splice(index, 1);
    setEmployeeHistoryData(updatedEmployeeHistoryData);
    setEmployeeHistoryCount(employeeHistoryCount - 1);
    setUserResume((prev) => ({
      ...prev,
      employeHistory: updatedEmployeeHistoryData,
    }));
  };

  const handleEmployeeHistoryDataChange = (event, index) => {
    const updatedEmployeeHistoryData = [...employeeHistoryData];
    updatedEmployeeHistoryData[index][event.target.name] = event.target.value;
    setEmployeeHistoryData(updatedEmployeeHistoryData);
    setUserResume((prev) => ({
      ...prev,
      employeHistory: updatedEmployeeHistoryData,
    }));
  };

  const handleStartDateChange = (date, index) => {
    const updatedEmployeeHistoryData = [...employeeHistoryData];
    updatedEmployeeHistoryData[index].startDate = date;
    setEmployeeHistoryData(updatedEmployeeHistoryData);
    setUserResume((prev) => ({
      ...prev,
      employeHistory: updatedEmployeeHistoryData,
    }));
  };

  const handleEndDateChange = (date, index) => {
    const updatedEmployeeHistoryData = [...employeeHistoryData];
    updatedEmployeeHistoryData[index].endDate = date;
    setEmployeeHistoryData(updatedEmployeeHistoryData);
    setUserResume((prev) => ({
      ...prev,
      employeHistory: updatedEmployeeHistoryData,
    }));
  };

  const handleDescriptionChange = (event, index) => {
    const updatedEmployeeHistoryData = [...employeeHistoryData];
    updatedEmployeeHistoryData[index].description = event.target.value;
    setEmployeeHistoryData(updatedEmployeeHistoryData);
    setUserResume((prev) => ({
      ...prev,
      employeHistory: updatedEmployeeHistoryData,
    }));
  };

  const renderEmployeeHistory = (index) => {
    return (
      <Accordion key={index} sx={accordianStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
        >
          <Typography>Employee History {index + 1}</Typography>
          <FontAwesomeIcon
            icon={faTrash}
            style={deleteIconStyle}
            onClick={() => deleteEmployeeHistory(index)}
          />
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Job Title"
            variant="filled"
            sx={accordianInputFieldStyle}
            name="jobTitle"
            value={employeeHistoryData[index].jobTitle}
            onChange={(event) => handleEmployeeHistoryDataChange(event, index)}
          />
          <TextField
            label="Employer"
            variant="filled"
            sx={accordianInputFieldStyle}
            name="employer"
            value={employeeHistoryData[index].employer}
            onChange={(event) => handleEmployeeHistoryDataChange(event, index)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              sx={dateStyle}
              inputFormat="dd/MM/yyyy"
              value={employeeHistoryData[index].startDate}
              onChange={(date) => handleStartDateChange(date, index)}
            />
            <DatePicker
              label="End Date"
              inputFormat="dd/MM/yyyy"
              value={employeeHistoryData[index].endDate}
              onChange={(date) => handleEndDateChange(date, index)}
              sx={dateStyle}
            />
          </LocalizationProvider>
          <br />
          <p>
            <b>Description</b>
            <div style={charaterLimitStyle}>
              {80 - (employeeHistoryData[index]?.description?.length || 0)}
              {"-"}Characters left
            </div>
          </p>
          <TextField
            placeholder={EMPLOYEE_HISTORY_DESCRIPTION}
            multiline
            rows={2}
            maxRows={4}
            sx={textAreaStyle}
            name="description"
            value={employeeHistoryData[index].description}
            onChange={(event) => handleDescriptionChange(event, index)}
            inputProps={{ maxLength: 80 }}
          />
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Box>
      {employeeHistoryData.map((_, index) => renderEmployeeHistory(index))}

      <Box sx={addButtonStyle} onClick={addEmployeeHistory}>
        <b>
          {employeeHistoryCount < 2 && (
            <FontAwesomeIcon icon={faAdd} style={iconStyle} />
          )}{" "}
          {employeeHistoryCount < 2 ? { ADD_OTHER_TWO_EMPLOYEE_HISTORY } : ""}
        </b>
      </Box>
    </Box>
  );
}

export default EmployeeHistory;
