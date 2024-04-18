const { Axios } = require('axios');
const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const mongoose = require('mongoose');
const userRouter = require('../Backend/router/userRoute')

  


app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
  }));   
  
app.use("/api/users",userRouter );


const url = 'mongodb://localhost:27017/myDatabase';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected successfully to MongoDB'); 
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



app.listen(PORT,()=>{
 console.log('server is runing 3000');
})