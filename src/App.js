import RenderSection from "./componets/RenderSection/RenderSection";
import { useEffect, useState } from "react";
import { userContext } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumeTemplates from "./componets/ResumeTemplate/ResumeTemplates";
import { useLocation } from "react-router-dom";
function App() {
  const [resume, setResume] = useState(Number(localStorage.getItem("id") || 1));
  localStorage.setItem("id", resume);
  const location = useLocation();
  const [userResume, setUserResume] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    about: "",
    mobile: "",
    email: "",
    country: "",
    city: "",
    nationality: "",
    postalCode: "",
    address: "",
    userLinks: [],
    skills: [],
    employeHistory: [],
    employeEducation: [],
    languages: "",
  });
  useEffect(() => {
    setUserResume({
      firstName: "",
      lastName: "",
      designation: "",
      about: "",
      mobile: "",
      email: "",
      country: "",
      city: "",
      nationality: "",
      postalCode: "",
      address: "",
      userLinks: [],
      skills: [],
      employeHistory: [],
      employeEducation: [],
      languages: "",
    });
  }, [location]);

  return (
    <div className="App">
      <userContext.Provider
        value={{
          userResume,
          setUserResume,
          resume,
          setResume,
        }}
      >
        <Routes>
          <Route path="/" element={<ResumeTemplates />} />
          <Route path="/resumes" element={<RenderSection />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
