import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import { useEffect } from "react";



import './Header.css'

function HeaderNav() {

    const navigate = useNavigate();

    const [file_list, setFileList] = useState(['AboutMe.sql',
        'Education.sql',
        'Work_Ex.sql',
        'Projects.sql',
        'Skills.sql',
        'Extra_Curriculars.sql',
        'Courses.sql',
        'Contact.sql']);   // dynamic



    let is_active = 'AboutMe.sql';

    const [activeTab, setActiveTab] = useState(file_list[0]);


    // Extract correct route from HashRouter
    const fullUrl = window.location.hash.replace("#/", "");
    const tab = fullUrl.split("/").pop();


    const mapping = {
        "aboutme": "AboutMe.sql", 'education': 'Education.sql', "work_ex": 'Work_Ex.sql', "projects": "Projects.sql",
        "skills": "Skills.sql", "extra_curriculars": "Extra_Curriculars.sql", "contact": "Contact.sql", "courses": "Courses.sql"
    }

    useEffect(() => {

        if (mapping[tab] && !file_list.includes(mapping[tab])) {
            setFileList(prev => [...prev, mapping[tab]]);
        }

        setActiveTab(mapping[tab]);

    }, [tab]);

    const handleCloseTab = (file) => {
        const newList = file_list.filter(f => f !== file);
        setFileList(newList);

        if (file === activeTab) {
            // When closing the active tab → select a neighbor
            if (newList.length > 0) {
                const closedIndex = file_list.indexOf(file);
                const newIndex = Math.max(0, closedIndex - 1);
                handleTabClick(newList[newIndex]);
            } else {


            }
        }
    };
    // <-- triggers when tab changes



    // Define the function to handle tab clicks
    const handleTabClick = (file) => {
        setActiveTab(file); // This updates the state and triggers a re-render
        navigate("/" + file.replace(/\.[^/.]+$/, "").toLowerCase())

    };
    //by default;


    return (
        <>

            <ul className="nav nav-tabs">

                {file_list.map((file) => (
                    <li className="nav-item" key={file}>
                        <a
                            className={`nav-link ${file === activeTab ? "active" : ""}`}

                            to="/portfolio/workspace-shagun/"
                            onClick={(e) => {
                                e.preventDefault();
                                handleTabClick(file)
                            }}
                        >
                            <i class="bi bi-filetype-sql me-1"></i>

                            {file}

                            {file_list.length > 1 && file === activeTab ? (
                                <span className="close-btn"

                                    onClick={(e) => {
                                        e.stopPropagation();   // so clicking “x” doesn’t select the tab
                                        e.preventDefault();
                                        handleCloseTab(file);
                                    }}

                                >x</span>
                            ) : (
                                ""
                            )}

                        </a>
                    </li>
                ))
                }


                < li className="nav-item">
                    <button
                        style={{
                            justifyContent: "center",

                            background: "none",
                            alignItems: "center",
                            border: "none"
                        }}
                    >
                        +
                    </button>
                </li>



            </ul >

        </>
    )

}

export default HeaderNav;