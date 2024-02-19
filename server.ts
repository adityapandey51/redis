import express, { RequestHandler } from "express";
import client from "./client.js";
import axios from "axios";

const app=express()

const controller: RequestHandler = async (req , res)=>{
    const cachedValue=await client.get("todos")
    if(cachedValue) return res.json(JSON.parse(cachedValue))

    const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos")
    await client.set('todos',JSON.stringify(data))
    await client.expire("todos",60)
    res.json(data)
}

app.get("/",controller)

app.listen(8080)