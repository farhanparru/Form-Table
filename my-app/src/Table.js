import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa'; 
const Table = ({ data}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th style={styles.columnHeader}>Name</th>
            <th style={styles.columnHeader}>Age</th>
            <th style={styles.columnHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableData}>{item.name}</td>
              <td style={styles.tableData}>{item.age}</td>
              <td style={styles.tableData}>
             
                <FaEdit style={styles.icon} onClick={() =>(index)} />
               
                <FaTrash style={styles.icon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  columnHeader: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    textAlign: 'left',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableData: {
    padding: '10px',
    textAlign: 'left',
  },
  icon: {
    cursor: 'pointer',
    marginRight: '5px',
    fontSize: '20px',
    color: '#007bff', 
  },
};

export default Table;
