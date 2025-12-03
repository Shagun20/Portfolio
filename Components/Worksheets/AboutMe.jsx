import React, { useState } from 'react';
import Worksheet from './worksheet_template'
import '../Worksheets/worksheet.css'
import { sql_about_me, sql_education } from '../../Data/worksheets'
import DynamicTable from '../Worksheets/results'
import { keywords } from '../../Data/worksheets'
import { CSVLink } from 'react-csv';


function AboutMe({ database, changeDB }) {

    const show = true;
    const [is_run, run_sql] = useState(false);
    const [isOpen, setIsOpen] = useState(true);



    console.log(is_run);
    const sql_words = sql_about_me.query.split(" ");
    const count = 1;

    const worksheetProps = {
        database: database,
        file: sql_about_me.file,
        changeDB: changeDB,
        run_sql: run_sql
    };



    return (<>




        <Worksheet {...worksheetProps}> </Worksheet >


        <div className="d-flex sql-editor bg-white border-0" style={{ "height": "40vh" }}>

            <div className="d-flex col-1 my-2 justify-content-end p-3 border-end border-1 small border-light"
            > {count}</div>
            <div className='d-flex col-1 my-4 justify-content-end py-2 border-end border-1'
                style={{
                    width: "3px",
                    height: "15px",
                    background: is_run ? "#0D6EFD" : "lightgray",
                    marginLeft: "0px",
                    borderRadius: "2px"
                }}
            />

            <div className="d-flex m-2 p-2 col-11 bg-white">
                {


                    sql_words.map((word, index) => {
                        const counter = index + 1;
                        const isKeyword = keywords.includes(word.toUpperCase());
                        const isString = word.includes("\'")
                        const isNo = word.toLowerCase().includes("array_agg")
                        // const lengthScore = word.length * 2;
                        // const someCalc = counter * lengthScore;




                        return (
                            <div
                                key={word}
                                className={`text p-1 ${isKeyword ? "text-uppercase sql-keyword" : isString ? "sql-string" : isNo ? sql - number : "text-lowercase"}`}
                            >
                                {word}
                            </div>
                        );




                    })}
            </div>


        </div>


        <div
            className="border rounded bg-white p-3 d-flex flex-column"
            style={{
                transition: "height 0.3s ease, margin-top 0.5s ease",
                height: isOpen ? "calc(100vh - 40vh)" : "calc(100vh - 85vh)",
                marginTop: is_run ? isOpen ? "0" : "220px" : "300px"   // << this makes it SWIFT DOWN

            }}


        >

            {/* HEADER ROW */}
            <div className="row mb-2">
                <button
                    className="btn btn-sm me-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <i className="bi bi-chevron-up"></i>
                    ) : (
                        <i className="bi bi-chevron-down"></i>
                    )}
                </button>


                {isOpen && <div className="col-6 fw-semibold text-secondary small">
                    Results
                </div>}



                {isOpen && <div className="col-6 d-flex align-items-center justify-content-end text-secondary">

                    {/* SEARCH BOX */}
                    <div
                        className="d-flex align-items-center search-container small me-2"
                        style={{ height: "20px", fontSize: "12px" }}
                    >
                        <i className="bi bi-search search-icon"></i>

                        <button className="search-box rounded bg-light text-secondary">
                            <i className="bi bi-search m-1"></i>
                            <input
                                className="bg-light"
                                type="text"
                                style={{ border: "none", outline: "none" }}
                                placeholder="Search results"
                            />
                        </button>
                    </div>


                    <button
                        className="btn small me-2"
                        style={{ fontSize: "12px", border: "none" }}
                    >
                        <i className="bi bi-funnel"></i>
                    </button>


                    <button
                        className="btn small me-2"
                        style={{ fontSize: "11px", border: "none" }}
                    >
                        1 row <i className="bi bi-info-circle"></i>
                    </button>


                    <CSVLink data={sql_about_me.results} filename="About.csv">
                        <button
                            className="btn small"
                            style={{ fontSize: "12px", border: "none" }}
                        >
                            <i className="bi bi-download text-secondary"></i>
                        </button>
                    </CSVLink>

                </div>}
            </div>


            {isOpen && <DynamicTable data={sql_about_me.results} />}


        </div >









    </>)
}

export default AboutMe
