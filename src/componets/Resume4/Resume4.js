import React from "react";
import "./Resume4.css";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import { skillValue, months } from "../../utils";

const divStyle = {
  minHeight: "200vh",
};
const Resume4 = () => {
  const { userResume, setUserResume } = useContext(userContext);

  return (
    <div>
      <div className="container1" style={divStyle}>
        <div className="header">
          <div className="full-name">
            <span className="first-name"> {userResume.firstName}</span>{" "}
            <span className="last-name">{userResume.lastName}</span>
          </div>
          <div className="contact-info">
            {userResume.email.length > 0 && (
              <span className="email">Email: </span>
            )}{" "}
            <span className="email-val">{userResume.email}</span>
            <span> </span>
            {userResume.mobile.length > 0 && (
              <span className="phone">Phone: </span>
            )}{" "}
            <span className="phone-val">{userResume.mobile}</span>{" "}
            {userResume.country.length > 0 && (
              <span className="phone">Country : </span>
            )}{" "}
            <span className="phone-val">
              {" "}
              {userResume.country}
              {userResume.city && ","}
              {userResume.city}
            </span>
          </div>
          <div className="contact-info">
            {userResume.languages.length > 0 && (
              <span className="email">Languages: </span>
            )}{" "}
            <span className="email-val">{userResume.languages}</span>{" "}
            {userResume.nationality.length > 0 && (
              <span className="phone">Nationality: </span>
            )}{" "}
            <span className="phone-val">{userResume.nationality}</span>{" "}
            {userResume.postalCode.length > 0 && (
              <span className="phone">Postal Code : </span>
            )}
            <span className="email-val">{userResume.postalCode}</span>{" "}
            {userResume.address.length > 0 && (
              <span className="phone">Address : </span>
            )}
            <span className="email-val">{userResume.address}</span>{" "}
          </div>

          <div className="about">
            <span className="position">{userResume.designation}</span>
            <span className="desc">{userResume.about}</span>
          </div>
        </div>
        <div className="details">
          <div className="section">
            {userResume.employeHistory.length > 0 && (
              <div className="section__title">Experience</div>
            )}{" "}
            <div className="section__list">
              <div className="section__list-item">
                {userResume?.employeHistory?.map((val) => {
                  return (
                    <div className="left">
                      <div className="name">{val.jobTitle}</div>
                      <div className="addr">{val.employer}</div>
                      <div className="duration">
                        {months(val?.startDate?.$M)} {val?.startDate?.$y}
                        {"-"}
                        {months(val?.endDate?.$M)} {val?.endDate?.$y}
                      </div>
                      <p style={{ marginBottom: 0 }}>{val.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="section">
            {userResume.employeEducation.length > 0 && (
              <div className="section__title">Education</div>
            )}{" "}
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  {userResume?.employeEducation?.map((val) => {
                    return (
                      <div className="left">
                        <div className="name">{val.school}</div>
                        <div className="addr">{val.degree}</div>
                        <div className="duration">
                          {months(val?.startDate?.$M)} {val?.startDate?.$y}
                          {"-"}
                          {months(val?.endDate?.$M)} {val?.endDate?.$y}
                        </div>
                        <p style={{ marginBottom: 0 }}>{val.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            {userResume?.skills[0]?.length > 0 && (
              <div className="section__title">Skills</div>
            )}{" "}
            <div className="skills">
              <div className="skills__item">
                <div className="left">
                  <div className="name">
                    {" "}
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
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            {userResume.userLinks.length > 0 && (
              <div className="section__title">Follow</div>
            )}{" "}
            <div className="skills">
              <div className="skills__item">
                <div className="left">
                  <div className="name">
                    {" "}
                    {userResume?.userLinks?.map((val) => {
                      return (
                        <div>
                          <a target="_blank" rel="author" href={val.socialLink}>
                            <br />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume4;
