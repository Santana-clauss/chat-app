const express=require('express')
const app=express()

const http=require('https').createServer(app)

const PORT=process.env.PORT||3010

http.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("Hello this is my server")
})

//socket code
const  io = require('socket.io')(http);
io.on("connection", (socket) => {
   socket.emit("message","Welcome to the chat room");       
   //listening for client message event
   socket.on("client-msg",)
} )                         