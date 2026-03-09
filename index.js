const express  =require("express")
const app = express()
const PORT = 5000


app.use("/api/auth",require("./routes/authroutes"))

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,(err)=>{
if(err){
    console.log(err)
}else{
    console.log("server is running on port",+PORT)
}
})