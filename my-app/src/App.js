import { useState } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';
import axios from 'axios'




export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_UR,
  headers:{
    "Content-Type": "application/json",
  }
})



function App() {
const [data,setData] = useState([])

const handleFormSubmit = (formData) =>{
   setData([...data,formData])
}

  return (
    <div className="App">
    <h1>Form and Table</h1>
    <Form onSubmit={handleFormSubmit}/>
    <Table data={data}  />
    </div>
  );
}

export default App;
