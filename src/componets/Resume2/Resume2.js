import React from "react";
import "./Resume2.scss";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faGraduationCap,
  faMapMarkedAlt,
  faMobile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { skillValue,months } from "../../utils";

const Resume2 = () => {
  const { userResume, setUserResume } =
    useContext(userContext);

  return (
    <div>
      <div className="resume" style={{ minHeight: "127.5vh" }}>
        <div className="base">
          <div className="profile" style={{ minHeight: "200px" }}>
            <div className="photo"></div>
            <div className="info">
              <h1 className="name">
                {" "}
                {userResume.firstName} {userResume.lastName}
              </h1>
              <p className="job">
                {" "}
                <span>{userResume.designation}</span>
              </p>
            </div>
          </div>
          <div className="about">
            <h3 style={{ wordBreak: "break-all" }}>
              {userResume.about && "About me-"}{" "}
            </h3>
            {userResume.about}
          </div>
          <div className="contact">
            <h3>{userResume.mobile && "Contact Me-"}</h3>
            <div className="call">
              {userResume.mobile && <FontAwesomeIcon icon={faMobile} />}{" "}
              <span>{userResume.mobile}</span>
            </div>
            <div>
              <span></span>{" "}
              <span>
                {userResume.country && (
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                )}
                {"  "}
                {userResume.country}
                {userResume.city && ","}
                {userResume.city}
              </span>
            </div>
            <div className="email">
              {userResume.email && <FontAwesomeIcon icon={faPaperPlane} />}{" "}
              <span>{userResume.email}</span>
            </div>
            <div>
              <span>
                {userResume.languages && "Languages-"}
                <span>{userResume.languages}</span>
              </span>
            </div>
            <div>
              <span>
                {userResume.nationality && "Nationality-"}
                <span>{userResume.nationality}</span>
              </span>
            </div>
            <div>
              <span>
                {userResume.postalCode && "Postal Code-"}
                <span>{userResume.postalCode}</span>
              </span>
            </div>
            <div>
              <span>
                {userResume.address && "Address-"}
                <span>{userResume.address}</span>
              </span>
            </div>
          </div>
          <div className="follow">
            {userResume.userLinks.length > 0 && <h3>Follow Me</h3>}{" "}
            <div className="box">
              {userResume?.userLinks?.map((val) => {
                return (
                  <>
                    <a href={val.socialLink} target="_blank">
                      <i
                        className="fab fa-facebook"
                        style={{ fontSize: "9px" }}
                      >
                        {val.socialName}
                      </i>
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="func">
          <div className="work" style={{ minWidth: "22rem", width: "22rem" }}>
            {userResume.employeHistory.length > 0 && (
              <h3>
                <FontAwesomeIcon icon={faBriefcase} /> Experience
              </h3>
            )}
            <ul>
              {userResume.employeHistory.length > 0 && (
                <div>
                  {userResume?.employeHistory?.map((val) => {
                    return (
                      <li>
                        <span style={{ wordBreak: "break-All" }}>
                          {val.jobTitle}
                        </span>
                        <p style={{ wordBreak: "break-All" }}>{val.employer}</p>
                        <small>
                          {months(val?.startDate?.$M)} {val?.startDate?.$y}
                          {"-"}
                          {months(val?.endDate?.$M)} {val?.endDate?.$y}
                        </small>
                        <span style={{ wordBreak: "break-All" }}>
                          {val.description}
                        </span>
                      </li>
                    );
                  })}
                </div>
              )}
            </ul>
          </div>
          <div
            className="edu"
            style={{ minWidth: "22rem", marginBottom: "25px", width: "22rem" }}
          >
            {userResume.employeEducation.length > 0 && (
              <h3>
                <FontAwesomeIcon icon={faGraduationCap} /> Education
              </h3>
            )}
            <ul>
              {userResume.employeEducation.length > 0 && (
                <div className="timeline-block">
                  {userResume?.employeEducation?.map((val) => {
                    return (
                      <div>
                        <span style={{ wordBreak: "break-All" }}>
                          {val.school}
                        </span>
                        <p style={{ wordBreak: "break-All" }}>{val.degree}</p>
                        <small>
                          {months(val?.startDate?.$M)}- {val?.startDate?.$y}
                          {"-"}
                          {months(val?.endDate?.$M)}- {val?.endDate?.$y}
                        </small>
                        <span style={{ wordBreak: "break-All" }}>
                          {val.description}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </ul>
          </div>
          <div
            className="skills-prog"
            style={{
              marginTop: "20px",
              minWidth: "22rem",
              padding: "5px",
              width: "22rem",
            }}
          >
            {userResume?.skills[0]?.length > 0 && (
              <>
                <h3>
                  <FontAwesomeIcon icon={faCode} /> Skills
                </h3>
                <ul>
                  {userResume?.skills && (
                    <>
                      {userResume?.skills[0]?.map((val) => {
                        return (
                          <li>
                            <span style={{ minWidth: "216px" }}>
                              {val.skillTitle}
                            </span>
                            {userResume.skills.length > 0 && "-"}
                            <span>{skillValue(val.skillValue)}</span>
                          </li>
                        );
                      })}
                    </>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume2;