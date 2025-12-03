import React from 'react';
import './results.css'
// function DynamicTable({ data }) {


//   // Get table headers dynamically from keys of the first object
//   const headers = Object.keys(data[0]);

//   return (
//     <>
//     <div class="border rounded overflow-hidden">

//  <table className="table rounded-table results-table table-bordered table-hover align-middle">
//       <thead className="results-table">
//         <tr >
//           {headers.map((h) => (
//             <th  scope="col" key={h} className='align-items-center'>
//               {h.toUpperCase()}
//             </th>
//           ))}
//         </tr>
//       </thead>

//       <tbody>
//         {data.map((row, idx) => (
//           <tr scope="row" key={idx}>
//             {headers.map((h) => (
//               <td key={h}>{row[h]}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>


//     </>

//   );
// }

function DynamicTable({ data }) {
  return (
    <div className="table-responsive border rounded" style={{maxHeight: "200px", overflowY : "auto"}}>
      <table className="results-table table table-bordered">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}



export default DynamicTable;

