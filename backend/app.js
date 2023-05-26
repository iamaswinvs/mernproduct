const express = require('express');//!to build backend quickly
const app = express();//! instance of express
const cors=require('cors');//!for cross origin policy
app.use(cors())
const PORT=8745//!app.use(cors()) means use this cors package when server starts up
app.use(express.json());//!to parse json data
app.use(express.urlencoded({extended:true}));//!to parse url encoded data
app.use(express.static('public'));//!to serve static files
require('./db')//!mogoose db connection folder is called here hence server starts up
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})