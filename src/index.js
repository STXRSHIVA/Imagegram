import express  from "express";
import connectDB from "./config/dbConfig.js";

const PORT = 3000;

const app = express(); // creates express app server instance

app.get('/ping',(req,res)=>{
    return res.json({message : 'pong'})
});

app.get('/',(req,res)=>{
    return res.send('Home')
});

app.get('/hello',(req,res)=>{
    return res.json({message : 'hello World..!'});
});

app.post('/hello',(req,res)=>{
    return res.json({message : 'POST : hello World..!'});
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

