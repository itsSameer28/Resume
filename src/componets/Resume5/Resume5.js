import React from "react";
import "./Resume5.css";
import { useContext } from "react";
import { userContext } from "../../Context/Context";
import { skillValue, months } from "../../utils";

const Resume5 = () => {
  const { userResume, setUserResume } = useContext(userContext);

  return (
    <div>
      <div id="resume" style={{ minHeight: "147vh", padding: "60px" }}>
        <h5>
          {userResume.firstName} {userResume.lastName}
        </h5>
        {userResume.designation.length > 0 && (
          <p>
            Designation: <span>{userResume.designation}</span>
          </p>
        )}
        {userResume.mobile.length > 0 && (
          <p>
            Cell: <a href={userResume.mobile}>{userResume.mobile}</a>
          </p>
        )}
        {userResume.email.length > 0 && (
          <p>
            Email: <a href={userResume.email}>{userResume.email}</a>
          </p>
        )}

        <div style={{ display: "flex" }}>
          <>
            {userResume.country.length > 0 && (
              <p>
                Country:
                <span>
                  {userResume.country}
                  {userResume.city && ","}
                  {userResume.city}
                </span>
              </p>
            )}
          </>
          {userResume.languages && ","}
          <p>
            {userResume.languages.length > 0 && (
              <span>
                Languages:<>{userResume.languages}</>
              </span>
            )}
          </p>
          {userResume.nationality && ","}
          <p>
            {userResume.nationality.length > 0 && (
              <span>
                Nationality:<>{userResume.nationality}</>
              </span>
            )}
          </p>
          {userResume.postalCode && ","}
          <p>
            {userResume.postalCode.length > 0 && (
              <span>
                P.O:<>{userResume.postalCode}</>
              </span>
            )}
          </p>
          {userResume.address && ","}
          <p>
            {userResume.address.length > 0 && (
              <span>
                Address: <>{userResume.address}</>
              </span>
            )}
          </p>
        </div>
        <p id="objective">{userResume.about}</p>
        <div>
          <dl>
            {userResume.employeHistory.length > 0 && <dt>Experience</dt>}{" "}
            <dd>
              <p>
                {userResume?.employeHistory?.map((val) => {
                  return (
                    <div>
                      <h2>{val.jobTitle}</h2>
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
              </p>
            </dd>
          </dl>
          <dl>
            {userResume.employeEducation.length > 0 && <dt>Education</dt>}{" "}
            <dd>
              <p>
                {userResume?.employeEducation?.map((val) => {
                  return (
                    <div>
                      <h2>{val.school}</h2>
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
              </p>
            </dd>
          </dl>
          <dl>
            {userResume.userLinks.length > 0 && <dt>Follow</dt>}{" "}
            <dd>
              {userResume?.userLinks?.map((val) => {
                return (
                  <div>
                    <a target="_blank" rel="author" href={val.socialLink}>
                      {val.socialName}
                    </a>
                  </div>
                );
              })}
            </dd>
          </dl>
          <dl>
            {userResume?.skills[0]?.length > 0 && <dt>Skills</dt>}{" "}
            <dd>
              {userResume?.skills[0]?.map((val) => {
                return (
                  <li>
                    <span style={{ minWidth: "216px" }}>{val.skillTitle}</span>
                    {userResume.skills.length > 0 && " - "}
                    <span>{skillValue(val.skillValue)}</span>
                  </li>
                );
              })}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Resume5;
