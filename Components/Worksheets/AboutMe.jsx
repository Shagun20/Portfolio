import React, { useState, useEffect } from 'react';
import Worksheet from './worksheet_template'
import '../Worksheets/worksheet.css'
import { sql_about_me } from '../../Data/worksheets'
import DynamicTable from '../Worksheets/results'
import { keywords } from '../../Data/worksheets'
import { CSVLink } from 'react-csv';


function AboutMe({ database, changeDB }) {


    const [data, setData] = useState(sql_about_me.results || []);

    const [is_run, run_sql] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const [cols, setCols] = useState(Object.keys(sql_about_me.results[0]).reduce((acc, col) => {
        acc[col] = true;   // default checked
        return acc;
    }, {}))


    const [searchRow, setSearchRow] = useState("");

    useEffect(() => {


        if (searchRow && searchRow.length > 0) {

            setData(sql_about_me.results.filter((row) =>
                Object.values(row).some(value =>
                    String(value).toLowerCase().includes(searchRow.toLowerCase())
                )
            ) || [])

            console.log(data)



        }
        else {
            setData(sql_about_me.results || [])
        }



    }, [searchRow]);


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


        <div className="d-flex sql-editor bg-white border-0" style={{ "height": "27vh" }}>

            <div className="d-flex my-2 justify-content-end p-3 border-end border-1 small border-light"
                style={{ width: "40px" }}>
                {count}
            </div>
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
                                className={`text p-1 ${isKeyword ? "text-uppercase sql-keyword" : isString ? "sql-string" : isNo ? "sql-number" :
                                    "text-lowercase"}`}
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
                height: isOpen ? "calc(100vh - 45vh)" : "calc(100vh - 85vh)",
                marginTop: is_run && isOpen? "5vh":"50vh"  // << this makes it SWIFT DOWN

            }}


        >

            <div className="row mb-1">
                <button
                    className="btn btn-sm small align-items-center justify-content-center"
                    style={{ height: "20px" }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <i className="small bi bi-chevron-up"></i>
                    ) : (
                        <i className="small bi bi-chevron-down"></i>
                    )}
                </button>


                {isOpen && <div className="col-6 fw-semibold text-secondary small">
                    Results
                </div>}



                {isOpen && <div className="col-6 d-flex align-items-center justify-content-end text-secondary">

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
                                value={searchRow}
                                onChange={(e) => { setSearchRow(e.target.value) }}

                                style={{ border: "none", outline: "none" }}
                                placeholder="Search results"
                            />
                        </button>
                    </div>



                    <button
                        className="btn small ms-2 me-2 bg-white d-flex align-items-center justify-content-center"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                            fontSize: "12px",
                            fontFamily: "Arial",
                            border: "none",

                        }}
                    >
                        <i className="bi bi-funnel"></i>
                    </button>

                    <div
                        className="dropdown-menu shadow-none p-2"
                        style={{
                            minWidth: "auto",
                            width: "150px",
                            fontSize: "12px",
                            fontFamily: "Arial",
                        }}
                    >

                        {
                            Object.keys(sql_about_me.results[0]).map((col) => (
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" checked={cols[col]} id={col}
                                        onChange={(e) => {

                                            setCols(prev => {
                                                const updated = { ...prev, [e.target.id]: !prev[e.target.id] };
                                                // console.log("Updated:", updated);
                                                return updated;
                                            });


                                        }}></input>
                                    <label className="form-check-label" htmlFor="opt1">
                                        {col}
                                    </label>
                                </div>
                            ))

                        }



                    </div>



                    <button
                        className="btn small me-1"
                        style={{ fontSize: "11px", border: "none" }}
                    >
                        {data.length} rows <i className="bi bi-info-circle"></i>
                    </button>


                    <CSVLink data={data} filename="About.csv">
                        <button
                            className="btn small"
                            style={{ fontSize: "12px", border: "none" }}
                        >
                            <i className="bi bi-download text-secondary"></i>
                        </button>
                    </CSVLink>

                </div>}
            </div>


            {isOpen ? (
                data.length > 0 ? (
                    <DynamicTable data={data} cols={cols} />
                ) : (
                    <div className='mx-auto align-items-center justify-content-center text-small text-secondary'>No results found.</div>
                )
            ) : null}


        </div >









    </>)
}

export default AboutMe
