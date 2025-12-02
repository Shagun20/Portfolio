import React from 'react';
import Worksheet from './worksheet_template'
import '../Worksheets/worksheet.css'
import { sql_work } from '../../Data/worksheets'
import DynamicTable from '../Worksheets/results'
import { keywords } from '../../Data/worksheets'

function WorkEx({ database, changeDB }) {



    const sql_words = sql_work.query.split(" ");
    const count = 1;

    const worksheetProps = {
        database: database,
        file: sql_work.file,
        changeDB: changeDB
    };




    return (<>




        <Worksheet {...worksheetProps}> </Worksheet >


        <div className="d-flex sql-editor bg-white border-0" style={{ "height": "40vh" }}>

            <div className="d-flex col-1 my-2 justify-content-end p-3 border-end border-1 border-light small"> {count}</div>
            <div className="d-flex m-2 p-2 col-11 bg-white">
                {


                    sql_words.map((word, index) => {
                        const counter = index + 1;
                        const isKeyword = keywords.includes(word.toUpperCase());
                        const isString = word.includes("\'")
                        const isNo= word.toLowerCase().includes("array_agg")
                        // const lengthScore = word.length * 2;
                        // const someCalc = counter * lengthScore;




                        return (
                            <div
                                key={word}
                                className={`text p-1 ${isKeyword ? "text-uppercase sql-keyword" : isString ? "sql-string" : isNo ? sql-number :"text-lowercase"}`}
                            >
                                {word}
                            </div>
                        );




                    })}
            </div>


        </div>


        <div class="border rounded bg-white p-3 h-100">

            <div class="d-flex justify-content-between align-items-center mb-2">

                <div class="col-2 fw-semibold text-secondary small">
                    Results
                </div>

                <div className="col-4"></div>

                <div class="d-flex col align-items-center justify-content-end text-secondary " style={{ "fontSize": "18px" }} >

                    <div className="d-flex justify-content-end search-container small " style={{ height: "20px", fontSize: "12px" }}>
                        <i className="bi bi-search search-icon "></i>

                        <button className="search-box  rounded bg-light text-secondary" >
                            <i className="bi bi-search m-1"></i>
                            <input
                                className='bg-light '
                                type="text"
                                style={{ border: "none", outline: "none" }}
                                placeholder=" Search results"
                            />
                        </button>
                    </div>

                    <button className="col-2 ms-1 btn align-items-center justify-content-center small"
                        style={{ fontSize: "12px", font: "Arial", border: "none", width: "auto" }}><i class="bi bi-funnel"></i></button>

                    <button className="col-2 btn align-items-center justify-content-center small"
                        style={{ fontSize: "11px", font: "Arial", border: "none", width: "auto", padding: "1px 1px !important" }}>1 row <i class="bi bi-info-circle"></i></button>

                    <button className="col-2 btn align-items-center justify-content-center small"
                        style={{ fontSize: "12px", font: "Arial", border: "none", width: "auto" }}><i class="bi bi-download text-secondary"></i></button>


                </div>



            </div>



<div className="table-scroll-wrapper">
            <DynamicTable data={sql_work.results} />
</div>

        </div>







    </>)
}

export default WorkEx;
