import { useState } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';


function App() {
const [data,setData] = useState([])
console.log(data)


const handleFormSubmit = (formData) =>{
   setData([...data,formData])
}


  return (
    <div className="App">
    <h1>Form and Table</h1>
    <Form onSubmit={handleFormSubmit}/>
     <Table data={data} />
    </div>
  );
}

export default App;
