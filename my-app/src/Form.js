import React, { useState } from "react";
import axios from 'axios'

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

  try {
    const response = await axios.post('http://localhost:3000/api/users/create', formData);
  
    onSubmit(response.data.data);
    setFormData({ name: "", age: "" });
  } catch (error) {
   alert(error)
  }

  };

  return (
    <form onSubmit={handleSubmit} 
    style={{ maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <button type="submit" 
      style={{ padding: "10px", width: 
      "100%", backgroundColor: 
      "blue", color: "white", border: "none" }}>
      Submit</button>
    </form>
  );
}

export default Form;
