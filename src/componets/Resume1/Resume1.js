import React from "react";
import "./Resume1.css";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPaperPlane,
  faLaptopCode,
  faUserGraduate,
  faBriefcase,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { skillValue,months } from "../../utils";
const Resume1 = () => {
  const { userResume, setUserResume} =
    useContext(userContext);

  return (
    <div>
      <div className="wrapper" style={{ minHeight: "127.5vh" }}>
        <div className="intro">
          <div className="profile" style={{ minHeight: "200px" }}>
            <div className="bio">
              <p className="name">
                <h6 className="title">
                  <span>
                    {userResume.firstName} {userResume.lastName}
                  </span>
                </h6>
              </p>
              <span className="title">
                {userResume.designation && "Designation "}
                {userResume.designation && "-"}{" "}
                <span className="profession">{userResume.designation}</span>
              </span>
            </div>
          </div>
          <div className="intro-section about">
            <h6 className="title">
              {userResume.about && "About me-"}
              <span className="paragraph" style={{ wordBreak: "break-all" }}>
                {userResume.about}
              </span>
            </h6>
          </div>
          <div className="intro-section contact">
            <span className="title">{userResume.mobile && "Contact-"}</span>
            <div className="info-section">
              {userResume.mobile && <FontAwesomeIcon icon={faMobile} />}{" "}
              <span>{userResume.mobile}</span>
            </div>
            <div className="info-section">
              {userResume.email && <FontAwesomeIcon icon={faPaperPlane} />}{" "}
              <span>
                {userResume.email && "Email-"}
                <span>{userResume.email}</span>
              </span>
            </div>
            <div className="info-section">
              {userResume.country && <FontAwesomeIcon icon={faMapMarkerAlt} />}{" "}
              <span className="title">
                {userResume.country && "Country-"}
                <span>
                  {userResume.country}
                  {userResume.city && ","}
                  {userResume.city}
                </span>
              </span>
            </div>
            <div className="info-section">
              <span>
                {userResume.languages && "Languages-"}
                <span>{userResume.languages}</span>
              </span>
            </div>
            <div className="info-section">
              <span>
                {userResume.nationality && "Nationality-"}
                <span>{userResume.nationality}</span>
              </span>
            </div>
            <div className="info-section">
              <span>
                {userResume.postalCode && "Postal Code-"}
                <span>{userResume.postalCode}</span>
              </span>
            </div>
            <div className="info-section">
              <span>
                {userResume.address && "Address-"}
                <span>{userResume.address}</span>
              </span>
            </div>
          </div>
          <div className="intro-section follow">
            {userResume.userLinks.length > 0 && (
              <h1 className="title">Follow</h1>
            )}{" "}
            <div className="info-section link">
              {userResume?.userLinks?.map((val) => {
                return (
                  <div>
                    <a target="_blank" rel="author" href={val.socialLink}>
                      {val.socialName}
                    </a>
                    <div className="sb-skeleton">
                      <div className="skillbar"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="detail">
          <div className="detail-section edu">
            {userResume.employeHistory.length > 0 && (
              <div className="detail-title">
                <div className="title-icon">
                  <FontAwesomeIcon icon={faBriefcase} />{" "}
                </div>
                <span>Employer History</span>{" "}
              </div>
            )}
            <div className="detail-content">
              {userResume.employeHistory.length > 0 && (
                <div className="timeline-block">
                  {userResume?.employeHistory?.map((val) => {
                    return (
                      <div>
                        <h1>{val.jobTitle}</h1>
                        <p>{val.employer}</p>
                        <time>
                          {months(val?.startDate?.$M)} {val?.startDate?.$y}
                          {"-"}
                          {months(val?.endDate?.$M)} {val?.endDate?.$y}
                        </time>
                        <p>{val.description}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="detail-section edu">
            {userResume.employeEducation.length > 0 && (
              <div className="detail-title">
                <div className="title-icon">
                  <FontAwesomeIcon icon={faUserGraduate} />{" "}
                </div>
                <span>Employee Education</span>{" "}
              </div>
            )}
            <div className="detail-content">
              {userResume.employeEducation.length > 0 && (
                <div className="timeline-block">
                  {userResume?.employeEducation?.map((val) => {
                    return (
                      <div>
                        <h1>{val.school}</h1>
                        <p>{val.degree}</p>
                        <time>
                          {months(val?.startDate?.$M)}- {val?.startDate?.$y}
                          {"-"}
                          {months(val?.endDate?.$M)}- {val?.endDate?.$y}
                        </time>
                        <p>{val.description}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {userResume?.skills[0]?.length > 0 && (
            <div className="detail-section pg-skill">
              <div className="detail-title">
                <div className="title-icon">
                  <i className="fas fa-laptop-code"></i>
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <span>Skills</span>
              </div>
              <div className="detail-content">
                <ul className="pg-list">
                  {userResume?.skills && (
                    <>
                      {userResume?.skills[0]?.map((val) => {
                        return (
                          <li>
                            <span >
                              {val.skillTitle}
                            </span>
                            {userResume.skills.length > 0 && " - "}
                            <span>{skillValue(val.skillValue)}</span>
                          </li>
                        );
                      })}
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume1;
