import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import Slider from "@mui/material/Slider";

const accordianInputFieldStyle = {
  width: "270px",
  margin: "15px",
  marginBottom: "3px",
};

const inputHintStyle = {
  color: "grey",
  fontSize: "13px",
};
const accordianWidth = { width: "480px" };
const addStyle = { display: "inline" };
const trashStyle = { marginLeft: "auto", cursor: "pointer" };
const boxStyle = { margin: "15px", color: "#66D3FA", cursor: "pointer" };
const AccordionDetailsStyle = { display: "flex" };
function Skills() {
  const { userResume, setUserResume } = useContext(userContext);

  const [skillData, setSkillData] = useState([]);
  const [skillCount, setSkillCount] = useState(0);

  const addSkill = () => {
    if (skillCount < 3) {
      const newSkills = {
        skillTitle: "",
        skillValue: 0,
      };
      setSkillData([...skillData, newSkills]);
      setSkillCount(skillCount + 1);
    }
  };

  const deleteSkill = (index) => {
    const updatedSkillData = [...skillData];
    updatedSkillData.splice(index, 1);
    setSkillData(updatedSkillData);
    setSkillCount(skillCount - 1);
    setUserResume((prev) => ({
      ...prev,
      skills: [updatedSkillData],
    }));
  };

  const renderSkill = (index) => {
    const handleSkillTitleChange = (event) => {
      const updatedSkillData = [...skillData];
      updatedSkillData[index].skillTitle = event.target.value;
      setSkillData(updatedSkillData);
      setUserResume((prev) => ({
        ...prev,
        skills: [updatedSkillData],
      }));
    };

    const handleSliderChange = (event, value) => {
      const updatedSkillData = [...skillData];
      updatedSkillData[index].skillValue = value;
      setSkillData(updatedSkillData);
      setUserResume((prev) => ({
        ...prev,
        skills: [updatedSkillData],
      }));
    };

    return (
      <Accordion key={index} sx={accordianWidth}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
        >
          <Typography>
            Skill {index + 1}: {skillData[index].skillTitle}
          </Typography>
          <FontAwesomeIcon
            icon={faTrash}
            style={trashStyle}
            onClick={() => deleteSkill(index)}
          />
        </AccordionSummary>
        <AccordionDetails sx={AccordionDetailsStyle}>
          <TextField
            label="Skill Name"
            variant="filled"
            sx={accordianInputFieldStyle}
            name="skillTitle"
            value={skillData[index].skillTitle}
            onChange={handleSkillTitleChange}
          />
          <Box width={300} sx={{ marginTop: "25px" }}>
            <Typography>Your Skill Level</Typography>
            <Slider
              aria-label="Temperature"
              value={skillData[index].skillValue}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={3}
              onChange={handleSliderChange}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Box>
      <Typography variant="h5">Skills</Typography>
      <Typography sx={inputHintStyle}>
        Enter the most important skills that show you fit the position
      </Typography>
      {userResume.skills && skillData.map((_, index) => renderSkill(index))}
      <Box sx={boxStyle} onClick={addSkill}>
        <b>
          {skillCount < 3 && <FontAwesomeIcon icon={faAdd} style={addStyle} />}{" "}
          {skillCount < 3 ? "Add Your Three Skills" : ""}
        </b>
      </Box>
    </Box>
  );
}
export default Skills;
