import { useState } from "react";
import styles from "./csvparser.module.css"

import Papa from 'papaparse';
import Pagination from "../pagination/pagination";

const CSVParserComponet = () => {
  const [csvData, setSsvData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [crewLength, setCrewLength] = useState(0);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: function(results) {
        setSsvData(results.data);
        setCrewLength(results.data.length - 1);
      }
    });
  };
 
  return (
    <div>
      <div className={styles.upload}>
        <h3>Upload CSV</h3>
        <input type='file' onChange={handleFileUpload}></input>
      </div>
      <div className={styles.tableContainer}>
        {csvData.length > 0 && 
           <table className={`${styles.table} ${csvData.length <= 0 && styles.none}`}>
           <thead>
             <tr>
               {csvData.length > 0 && Object.keys(csvData[0]).map((key, index) => (
                 <th key={index}>{key}</th>
               ))}
             </tr>
           </thead>
           <tbody>
             {(rowsPerPage  > 0 ?
             csvData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
             : csvData).map((row, index) => (
               <tr key={index}>
                 {Object.values(row).map((value, index) => (
                   <td key={index}>{value}</td>
                 ))}
               </tr>
             ))}
              <tr>
                 <Pagination 
                   movePage={(newPage) => setPage(newPage)}
                   setRows={(rows) => {
                     setRowsPerPage(rows);
                     setPage(0);
                   }}
                   page={page}
                   rowsPerPage={rowsPerPage}
                   crewLength={crewLength}
                 />
               </tr>
           </tbody>
         </table>
        }
      </div>
      <div>
        {csvData.length > 0 && <button className={styles.button}>Opslaan</button>}
      </div>
    </div>
  
  )
}

export default CSVParserComponet;