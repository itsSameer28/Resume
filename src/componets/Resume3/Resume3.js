import React from "react";
import "./Resume3.css";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { skillValue,months } from "../../utils";

const Resume3 = () => {
  const { userResume, setUserResume } =
    useContext(userContext);

  return (
    <div>
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <header className="resume-header pt-4 pt-md-0">
            <div className="media flex-column flex-md-row">
              <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div className="primary-info">
                  <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                    {userResume.firstName} {userResume.lastName}
                  </h1>
                  <div className="title mb-3">{userResume.designation}</div>
                  <div style={{ display: "flex" }}>
                    <ul className="list-unstyled">
                      <li>
                        <span>
                          {userResume.mobile && (
                            <FontAwesomeIcon icon={faMobileAlt} />
                          )}
                        </span>{" "}
                        <span>{userResume.mobile}</span>
                      </li>
                      <li>
                        <a href={userResume.email}>
                          <span>
                            {userResume.email && (
                              <FontAwesomeIcon icon={faEnvelope} />
                            )}
                          </span>{" "}
                          <span>{userResume.email}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="secondary-info ml-md-auto mt-2">
                  <ul className="resume-social list-unstyled">
                    <li>
                      <span>
                        {userResume.country}
                        {userResume.city && ","}
                        {userResume.city}{" "}
                      </span>
                    </li>
                    <li>
                      <span>{userResume.languages}</span>
                    </li>
                    <li>
                      <span>{userResume.nationality}</span>
                    </li>
                    <li>
                      <span>{userResume.postalCode}</span>
                    </li>
                    <li>
                      <span>{userResume.address}</span>
                    </li>
                    <li className="mb-3" style={{ marginTop: "20px" }}>
                      {userResume?.userLinks?.map((val) => {
                        return (
                          <div>
                            <a
                              target="_blank"
                              rel="author"
                              href={val.socialLink}
                              style={{ color: "red" }}
                            >
                              {val.socialName}
                            </a>
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="resume-body p-5" style={{ minHeight: "110vh" }}>
            {userResume.about.length > 0 && (
              <section className="resume-section summary-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  {userResume.about && "About me-"}
                  <span
                    className="paragraph"
                    style={{ wordBreak: "break-all" }}
                  ></span>
                </h2>
                <div className="resume-section-content">
                  <p className="mb-0">{userResume.about}</p>
                </div>
              </section>
            )}
            <div className="row">
              <div className="col-lg-9">
                {userResume.employeHistory.length > 0 && (
                  <section className="resume-section experience-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3">
                      {userResume.employeHistory.length > 0 && (
                        <span>Employer History</span>
                      )}
                    </h2>
                    <div className="resume-section-content">
                      <div className="resume-timeline position-relative">
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              {userResume?.employeHistory?.map((val) => {
                                return (
                                  <div>
                                    <h3 className="resume-position-title font-weight-bold mb-1">
                                      {val.jobTitle}
                                    </h3>
                                    <div className="resume-company-name ml-auto">
                                      {val.employer}
                                    </div>
                                    <div className="resume-position-time">
                                      {months(val?.startDate?.$M)}{" "}
                                      {val?.startDate?.$y}
                                      {"-"}
                                      {months(val?.endDate?.$M)}{" "}
                                      {val?.endDate?.$y}
                                    </div>
                                    <p>{val.description}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                      </div>
                    </div>
                  </section>
                )}
                {userResume.employeEducation.length > 0 && (
                  <section className="resume-section experience-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                      {userResume.employeEducation.length > 0 && (
                        <span>Employer Education</span>
                      )}
                    </h2>
                    <div className="resume-section-content">
                      <div className="resume-timeline position-relative">
                        <article className="resume-timeline-item position-relative pb-5">
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              {userResume?.employeEducation?.map((val) => {
                                return (
                                  <div>
                                    <h3 className="resume-position-title font-weight-bold mb-1">
                                      {val.school}
                                    </h3>
                                    <div className="resume-company-name ml-auto">
                                      {val.degree}
                                    </div>
                                    <div className="resume-position-time">
                                      {months(val?.startDate?.$M)}{" "}
                                      {val?.startDate?.$y}
                                      {"-"}
                                      {months(val?.endDate?.$M)}{" "}
                                      {val?.endDate?.$y}
                                    </div>
                                    <p>{val.description}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          {/*//resume-timeline-item-header*/}
                        </article>
                      </div>
                    </div>
                  </section>
                )}
              </div>
              {userResume?.skills[0]?.length > 0 && (
                <div className="col-lg-3">
                  <section className="resume-section skills-section mb-5">
                    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                      <span>Skills</span>
                    </h2>
                    <div className="resume-section-content">
                      <div className="resume-skill-item">
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            <div className="resume-skill-name">
                              {userResume?.skills[0]?.map((val) => {
                                return (
                                  <li>
                                    <span style={{ minWidth: "216px" }}>
                                      {val.skillTitle}
                                    </span>
                                    {userResume.skills.length > 0 && " - "}
                                    <span>{skillValue(val.skillValue)}</span>
                                  </li>
                                );
                              })}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Resume3;
