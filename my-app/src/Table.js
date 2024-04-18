import React from 'react'

const Table = ({data}) => {

  
  return (
    <div >
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {data.map((item)=>(
            <tr key={item.id}>
             <td>{item.name}</td>
             <td>{item.age}</td>
             <button>Update</button>
             <button>Delete</button>
            </tr>
        ))}
        </tbody>
        
       
        
        
    </table>
      
    </div>
  )
}

export default Table
