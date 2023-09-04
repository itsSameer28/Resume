import { TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import { userContext } from "../../Context/Context";

const accordionInputFieldStyle = {
  width: "270px",
  margin: "15px",
  marginBottom: "3px",
};

function SocialLinks() {
  const { userResume, setUserResume } = useContext(userContext);

  const [linksData, setLinksData] = useState([]);
  const [linksCount, setLinksCount] = useState(0);

  const addLinks = () => {
    if (linksCount < 2) {
      const newLinks = {
        socialName: "",
        socialLink: "",
      };
      setLinksData([...linksData, newLinks]);
      setLinksCount(linksCount + 1);
    }
  };

  const deleteLinks = (index) => {
    const updatedLinksData = [...linksData];
    updatedLinksData.splice(index, 1);
    setLinksData(updatedLinksData);
    setLinksCount(linksCount - 1);
    setUserResume((prev) => ({
      ...prev,
      userLinks: updatedLinksData,
    }));
  };

  const renderLinks = (index) => {
    const handleLinksTitleChange = (event) => {
      const updatedLinksData = [...linksData];
      updatedLinksData[index].socialName = event.target.value;
      setLinksData(updatedLinksData);
      setUserResume((prev) => ({
        ...prev,
        userLinks: updatedLinksData,
      }));
    };

    const handleLinksChange = (event) => {
      const updatedLinksData = [...linksData];
      updatedLinksData[index].socialLink = event.target.value;
      setLinksData(updatedLinksData);
      setUserResume((prev) => ({
        ...prev,
        userLinks: updatedLinksData,
      }));
    };

    return (
      <Accordion key={index} sx={{ width: "480px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
        >
          <Typography>
            Link {index + 1}: {linksData[index].socialName}
          </Typography>
          <FontAwesomeIcon
            icon={faTrash}
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={() => deleteLinks(index)} 
          />
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex" }}>
          <TextField
            label="Label"
            variant="filled"
            sx={accordionInputFieldStyle}
            name="socialName"
            value={linksData[index].socialName}
            onChange={handleLinksTitleChange}
          />
          <TextField
            label="Link"
            variant="filled"
            sx={accordionInputFieldStyle}
            name="socialLink"
            value={linksData[index].socialLink}
            onChange={handleLinksChange}
          />
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Box>
      {linksData.map((_, index) => renderLinks(index))}

      {linksCount < 2 && (
        <Box
          sx={{ margin: "15px", color: "#66D3FA", cursor: "pointer" }}
          onClick={addLinks}
        >
          <b>
            <FontAwesomeIcon
              icon={faAdd}
              style={{ display: "inline", color: "#66D3FA" }}
            />{" "}
            Add Your Two Links
          </b>
        </Box>
      )}
    </Box>
  );
}

export default SocialLinks;
