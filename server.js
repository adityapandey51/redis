import express from "express";
import client from "./client.js";
import axios from "axios";

const app=express()

app.get("/",async(req,res)=>{
    // speeds up the response
    const cachedValue=await client.get("todos")
    if(cachedValue) return res.json(JSON.parse(cachedValue))

    const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos")
    await client.set('todos',JSON.stringify(data))
    await client.expire("todos",60)
    res.json(data)
})

app.listen(8080)