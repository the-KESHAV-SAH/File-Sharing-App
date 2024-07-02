import express from 'express' // use "type": "module" in packge.json 
// const express=require('express')
import DBConnection from './database/db.js'
import router from './routes/routes.js';
import cors from 'cors';

const app=express()

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',router);

DBConnection();

// app.get('/',(req,res)=>{
//     res.send('Hellow World');
//     // console.log('Hello World')
// });

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
});