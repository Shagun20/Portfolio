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

function DynamicTable({ data, cols }) {
  
  const result = Object.keys(cols).filter(key => cols[key] === true);
  
  return (

    
    <div className="mt-2 table-responsive border rounded" style={{maxHeight: "300px", overflowY : "auto"}}>
      <table className="results-table table table-bordered">
        <thead>
          <tr>
            {result.map((key) => (
              <th  key={key}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              
              {Object.keys(row).filter((key) => result.includes(key)).map((val, j) => (
                <td key={j}>{row[val]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}



export default DynamicTable;

