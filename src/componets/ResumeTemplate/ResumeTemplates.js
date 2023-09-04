import React from "react";
import Resume1 from "../../assets/Resume1.png";
import Resume2 from "../../assets/Resume2.png";
import Resume3 from "../../assets/Resume3.png";
import Resume4 from "../../assets/Resume4.png";
import Resume5 from "../../assets/Resume5.png";
import Slider from "react-slick";
import { userContext } from "../../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Box } from "@mui/material";
const ResumeTemplates = () => {
  const { resume, setResume } = useContext(userContext);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <center>
        <h1 className="heading">Make Your Resume</h1>
      </center>

      <Slider {...settings}>
        <Box>
          <img
            src={Resume1}
            alt="Resume1"
            className="images"
            onClick={() => {
              setResume(1);
              navigate("/resumes");
            }}
          ></img>
        </Box>
        <Box>
          <img
            src={Resume2}
            alt="Resume2"
            className="images"
            onClick={() => {
              setResume(2);
              navigate("/resumes");
            }}
          ></img>
        </Box>
        <Box>
          <img
            src={Resume3}
            alt="Resume3"
            className="images"
            onClick={() => {
              setResume(3);
              navigate("/resumes");
            }}
          ></img>
        </Box>
        <Box>
          <img
            src={Resume4}
            alt="Resume4"
            className="images"
            onClick={() => {
              setResume(4);
              navigate("/resumes");
            }}
          ></img>
        </Box>
        <Box>
          <img
            src={Resume5}
            alt="Resume5"
            className="images"
            onClick={() => {
              setResume(5);
              navigate("/resumes");
            }}
          ></img>
        </Box>
      </Slider>
    </div>
  );
};

export default ResumeTemplates;
