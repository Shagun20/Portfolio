import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useRef } from "react";
import "./worksheet.css"
import { toast } from 'react-hot-toast'

const Worksheet = ({ database, file, changeDB, run_sql = null }) => {

    const btnRef = useRef(null);


    const url = window.location.href;
    const btn = btnRef.current;
    useEffect(() => {
        const timer = setTimeout(() => {
            handleRun();   // auto-trigger after delay
        }, 1000); // 1000ms = 1 second

        return () => clearTimeout(timer); // cleanup
    }, []);


    const handleRun = () => {
        const btn = btnRef.current;

        if (btn) {
            btn.focus();   // add focus

            setTimeout(() => {
                btn.blur();
            }, 200);  // focus only 40ms (reduce this to make it even shorter)
        

        // LONG delay before running SQL
        setTimeout(() => {
            run_sql(true);
        }, 800);  // SQL runs after 400ms (increase this for more lag)
    }
};


return (<>






    <div style={{
        "height": "24px", "width": "100%",
        "padding": "8px 18px",
        "color": "#5D6A85",

        "fontSize": "11px",
    }}>


        Shagun's Workspace
        <i class="bi bi-chevron-right m-1 fs-small" ></i>
        <span style={{ cursor: "pointer" }}
            onClick={() => {
                navigator.clipboard.writeText(file);
                toast.success("Copied to clipboard!", {
                    position: "top-center",
                    autoClose: 2000,
                })


            }}>
            {file}

        </span>



    </div>

    <div class='d-flex'>
        <div class="d-flex col-2 mt-1 ms-4 left">
            <div class="btn-group shadow-sm">
                <button type="button" id="run" ref={btnRef} class="btn btn-primary d-flex align-items-center rounded-end-0 py-1 fw-bold play" onClick={handleRun}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </button>

                <button type="button" class="btn btn-primary d-flex align-items-center rounded-start-0 py-1 fw-bold dropdown-toggle-custom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
                    </svg>
                </button>
            </div>

        </div>

        <div class="d-flex col-2"></div>


        <div class="d-flex col justify-content-end me-2 " style={{ "fontSize": "13px" }}>


            <div class="d-flex align-items-center gap-2">
                <i class="bi bi-person-square text-secondary small"></i>
                <span class="fw-semibold small">ACCOUNTADMIN</span>

                <span class="text-secondary small">•</span>



                <span class="fw-semibold small">
                    COMPUTE_WH</span>                      <span class="fw-semibold  text-muted small">(X-Small)</span>
            </div>

            <div class="d-flex align-items-center rounded ms-4 gap-2 ">

                <div className="dropdown">
                    <button className="btn dropdown-toggle  align-items-center justify-content-center small fw-semibold text px-1 py-1"

                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-auto-close="false"

                        style={{ fontSize: "12px", font: "Arial", border: "none" }}
                    >
                        <i class="bi bi-database me-1"></i>

                        {database}

                    </button>
                    <div class="dropdown-menu shadow-none" aria-labelledby="dropdownMenuButton" style={{
                        minWidth: "unset !important", width: "auto", height: "auto", fontSize: "12px", font: "Arial"
                    }}>
                        <a class="dropdown-item text-primary fw-semibold" onClick={() => changeDB("SHAGUN_DATA_DB")} > <i class="bi bi-database me-1"></i> SHAGUN_DATA_DB</a>

                    </div>
                </div>

            </div>

            <div class="d-flex align-items-center gap-2 ms-3">
                <button class="d-flex align-items-center fw-semibold text-secondary py-1"
                    onClick={() => {
                        navigator.clipboard.writeText(url);
                        toast.success("Link copied to clipboard!", {
                            position: "top-right",
                            autoClose: 2000,
                        })


                    }}>
                    Share
                </button>

                <button class="d-flex align-items-center justify-content fw-semibold text-secondary py-1 ">
                    ...
                </button>
            </div>
        </div>


    </div>




</>)
    }

export default Worksheet;
