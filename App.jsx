import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import Workspace from "./Components/Workspace"
import HeaderNav from "./Components/HeaderNav"
import Sidebar from './Components/SidedBar'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import AboutMe from './Components/Worksheets/AboutMe';
import Education from './Components/Worksheets/Education';
import Skills from './Components/Worksheets/Skills';
import Contact from './Components/Worksheets/Contact';
import WorkEx from './Components/Worksheets/WorkEx';
import Extra from './Components/Worksheets/Extra';
import Hobbies from './Components/Worksheets/Hobbies';
import Projects from './Components/Worksheets/Projects';

function App() {

  const [database, setDatabase] = useState('Choose Database');
  const fullUrl = window.location.href.replace(/\/+$/, ""); // For the full URL

  const mapping = {
    "aboutme": "AboutMe.sql", 'education': 'Education.sql', "work_ex": 'Work_Ex.sql', "projects": "Projects.sql",
    "skills": "Skills.sql", "extra_curriculars": "Extra_Curriculars.sql", "contact": "Contact.sql", "hobbies": "Hobbies.sql"
  }

  const [tab, setTab] = useState(mapping[fullUrl.substring(fullUrl.lastIndexOf('/') + 1)]); //this is the tab thats active right noww

  return (
    <>

      <div className="d-flex" style={{ height: "100%", width: "100%" }}>

        <div className="d-flex flex-column justify-content-between sideNav" style={{ width: "70px" }}>

          <div className="sf-group d-flex flex-column align-items-center">
            <i className="bi bi-snow icon-blue"></i>
            <i className="bi bi-arrow-right"></i>
            <div className="sf-divider"></div>

            <div className="sf-item active">
              <i className="bi bi-house-door"></i>
            </div>

            <i className="bi bi-plus-lg"></i>
            <i className="bi bi-search"></i>

            <div className="sf-divider"></div>

            <i className="bi bi-image"></i>
            <i className="bi bi-cloud-arrow-down"></i>
            <i className="bi bi-grid-3x3-gap"></i>
            <i className="bi bi-stars"></i>
            <i className="bi bi-activity"></i>
            <i className="bi bi-shop"></i>

            <div className="sf-divider"></div>

            <i className="bi bi-database"></i>
            <i className="bi bi-chevron-up"></i>
          </div>
          <div className="sf-bottom">
            <i className="bi bi-bell"></i>

            <div className="sf-profile">SM</div>
          </div>

        </div>

        <div className="d-flex flex-grow-1" style={{ marginLeft: "70px", height: "100vh", width: "calc(100vw - 70px)" }}>
          <Sidebar/>
          <div className="flex-grow-1">
            <HeaderNav>
            </HeaderNav>

            <Routes>
              <Route path="/portfolio/workspace-shagun/" element={<Workspace tab={tab} />}>

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
                  path="hobbies"
                  element={<Hobbies database={database} changeDB={setDatabase} />}
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

                <Route
                  index
                  element={<AboutMe database={database} changeDB={setDatabase} />}
                />
              </Route>
            </Routes>



          </div>
        </div>


      </div>

      <Toaster />





    </>
  )
}

export default App
