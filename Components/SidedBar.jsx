import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import './sidenav.css'
import { store } from '../shared/store';





function Sidebar() {

    const navigate = useNavigate();

    const fullUrl = window.location.href.replace(/\/+$/, ""); // For the full URL

    const mapping = {
        "aboutme": "AboutMe.sql", 'education': 'Education.sql', "work_ex": 'Work_Ex.sql', "projects": "Projects.sql",
        "skills": "Skills.sql", "extra_curriculars": "Extra_Curriculars.sql", "contact": "Contact.sql", "hobbies": "Hobbies.sql"
    }

    let fileA = mapping[fullUrl.substring(fullUrl.lastIndexOf('/') + 1)]; //this is the tab thats active right noww


    function handleButtonClick(file) {

        navigate("/portfolio/workspace-shagun/" + file.replace(/\.[^/.]+$/, "").toLowerCase())

    }

    // console.log(tab)
const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        

        if(searchInput && searchInput.length >0){
            setfile_list(original_file_list.filter((file)=> file.toLowerCase().includes(searchInput.toLowerCase())));
        }
        else{
            setfile_list(original_file_list);
        }

        console.log(file_list);
           

    }, [searchInput]);


    const original_file_list = ['AboutMe.sql',
        'Education.sql',
        'Work_Ex.sql',
        'Projects.sql',
        'Skills.sql',
        'Extra_Curriculars.sql',
        'Hobbies.sql',
        'Contact.sql']

    const [file_list, setfile_list]=useState(original_file_list);

    const sidebar = document.querySelector(".sidebarcontainer");
    const resizer = document.querySelector(".resizer");
    const [isResizing, setIsResizing] = useState(false);
    const [setWidth, setSidebarWidth] = useState(270);
    const sidebarRef = useRef(null);


    const startResizing = useCallback(() => {
        setIsResizing(true);
        document.body.style.cursor = "ew-resize";
        document.body.classList.add("no-select"); // disable text selection

    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
        document.body.style.cursor = "";
        document.body.classList.remove("no-select"); // re-enable selection

    }, []);

    const resize = useCallback(
        (mouseMoveEvent) => {
            if (!isResizing) return;

            let newWidth =
                mouseMoveEvent.clientX -
                sidebarRef.current.getBoundingClientRect().left;

            newWidth = Math.min(Math.max(newWidth, 250), 280); // min/max width

            setSidebarWidth(newWidth);
        },
        [isResizing]
    );


    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);


    return (
        <>



            <div className="sidebarcontainer" ref={sidebarRef}
                style={{ width: setWidth }}>

                <div className="resizer" onMouseDown={startResizing}></div>



                <div className="navbar">
                    <div className="workspace-header">
                        <svg className="workspace-icon" viewBox="0 0 16 16" role="presentation" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
                            <g class="blt-1rg5ohu blt-1dtpmc9">
                                <path fill="currentColor" d="M12.5 1A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1zM2 8v4.5a.5.5 0 0 0 .5.5H5V8zm4 5h6.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6zM2.5 2a.5.5 0 0 0-.5.5V7h3V2z"></path>
                            </g>
                            <g class="blt-1s85apg blt-1fx6h30">
                                <path fill="currentColor" fillRule="evenodd" d="M12.5 2A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2zM3 8.5v4a.5.5 0 0 0 .5.5H6V8.5zM7 13h5.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7zM3.5 3a.5.5 0 0 0-.5.5v4h3V3z" clipRule="evenodd"></path>
                            </g>
                        </svg>


                        Shagun's Workspace
                    </div>


                    <div>
                        <input type="text" id="file-search" 
                          value={searchInput}
                           onChange={(e) => setSearchInput(e.target.value)}
placeholder="Search for files" />

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "6px solid transparent",
                            background: "#ECEEF1",

                            fontSize: "13px",
                            width: "100%",
                            height: "26px",
                            marginTop: "5px",
                            padding: "8px 10px",
                            borderRadius: "6px"   // ← added border radius

                        }}>
                            + Add new
                        </div>

                        <div className="file-list">

                            {file_list.map((file) => (
                                <button id={file} key={file} className={`text-small text-secondary file-button ${fileA  === file ? "active" : ""
                                    }`} style={{
                                        fontSize: "12px",
                                        fontWeight: "500", background: "transparent"
                                    }} onClick={() => handleButtonClick(file)}>
                                    <i class="bi bi-filetype-sql ms-1 me-2"></i>
                                    <span>{file}</span>


                                </button>
                            ))}

                        </div>




                    </div>






                </div>





            </div >

            { }



        </>
    )
}

export default Sidebar