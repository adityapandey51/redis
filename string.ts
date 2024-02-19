import client from "./client.js";

async function init(){
    // gets the info from the database
    const result: (string | null)=await client.get("user:1")
    console.log(result)
    // sets the user:5 to wo
    await client.set('user:5','wo')
    // removes user:5 after 30sec
    await client.expire('user:5',30)
    // multiple gets 
    const h: (string | null)[]=await client.mget('user:1','user:2','user:3')
    console.log(h)
}
init()