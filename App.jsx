import { useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import Workspace from "./Components/Workspace"
import HeaderNav from "./Components/HeaderNav"
import Sidebar from './Components/SidedBar'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResumePDF from './Data/Resume.pdf';
import { Navigate, useNavigate } from "react-router-dom";


import AboutMe from './Components/Worksheets/AboutMe';
import Education from './Components/Worksheets/Education';
import Skills from './Components/Worksheets/Skills';
import Contact from './Components/Worksheets/Contact';
import WorkEx from './Components/Worksheets/WorkEx';
import Extra from './Components/Worksheets/Extra';
import Courses from './Components/Worksheets/Courses';
import Projects from './Components/Worksheets/Projects';


function App() {




  const [database, setDatabase] = useState('Choose Database');
  const fullUrl = window.location.href.replace(/\/+$/, ""); // For the full URL

  const mapping = {
    "aboutme": "AboutMe.sql", 'education': 'Education.sql', "work_ex": 'Work_Ex.sql', "projects": "Projects.sql",
    "skills": "Skills.sql", "extra_curriculars": "Extra_Curriculars.sql", "contact": "Contact.sql", "courses": "Courses.sql"
  }

  const [tab, setTab] = useState(mapping[fullUrl.substring(fullUrl.lastIndexOf('/') + 1)]); //this is the tab thats active right noww

 
  const navigate= useNavigate();
   useEffect(() => {
    navigate("/portfolio/workspace-shagun/aboutme");
  }, []);


  return (
    <>

      <div className="d-flex" style={{ height: "100%", width: "100%" }}>

        <div className="d-flex flex-column justify-content-between sideNav" style={{ width: "70px" }}>

          <div className="sf-group d-flex flex-column align-items-center">
            <i className="bi bi-snow icon-blue"></i>
            <div className="sf-item active">             <i className="bi bi-house-door"></i>
            </div>

            <div className="sf-divider"></div>


            <img style={{ cursor: 'pointer' }} onClick={() => { window.open("https://leetcode.com/u/shagunmohta2019/") }}
              width="18" height="18" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />

            <i class="bi bi-github" onClick={() => { window.open("https://github.com/Shagun20") }}></i>


            <div className="sf-divider"></div>

            <i class="bi bi-linkedin" onClick={() => { window.open("https://www.linkedin.com/in/shagun-mohta-9012041b8") }}></i>


            <i className="bi bi-file-earmark-pdf" onClick={() => {
              const link = document.createElement("a");
              link.href = ResumePDF;
              link.download = "Resume.pdf";
              link.click();
            }}></i>



            <div className="sf-divider"></div>

            <a href="mailto:shagunmohta2025@gmail.com" ><i class="bi bi-envelope"> </i> </a>
          </div>
          <div className="sf-bottom">
            <i className="bi bi-bell"></i>

            <div className="sf-profile">SM</div>
          </div>

        </div>

        <div className="d-flex flex-grow-1" style={{ marginLeft: "70px", height: "100vh", width: "calc(100vw - 70px)" }}>
          <Sidebar />
          <div className="flex-grow-1">
            <HeaderNav>
            </HeaderNav>

            <Routes>
              <Route path="/portfolio/workspace-shagun/" element={<Workspace tab={tab} />}>

                <Route
                  index
                  element={<Navigate to="aboutme" replace />}
                />

                <Route
                  path="aboutme"
                  element={<AboutMe database={database} changeDB={setDatabase} />}
                />
                <Route
                  path="contact"
                  element={<Contact database={database} changeDB={setDatabase} />}
                />
                <Route
                  path="work_ex"
                  element={<WorkEx database={database} changeDB={setDatabase} />}
                />
                <Route
                  path="extra_curriculars"
                  element={<Extra database={database} changeDB={setDatabase} />}
                />
                <Route
                  path="courses"
                  element={<Courses database={database} changeDB={setDatabase} />}
                />
                <Route
                  path="education"
                  element={<Education database={database} changeDB={setDatabase} />}
                />
                <Route
                  path="skills"
                  element={<Skills database={database} changeDB={setDatabase} />}
                />
                <Route
                  path="projects"
                  element={<Projects database={database} changeDB={setDatabase} />}
                />
              </Route>
            </Routes>





          </div>
        </div>


      </div >

      <Toaster />





    </>
  )
}

export default App
