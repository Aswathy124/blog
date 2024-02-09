const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogRoute=require("./controller/blogRoute")
const postRoute=require("./controller/postRouter")
const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://achu:Harifa123@cluster0.6jzim5t.mongodb.net/blogDb?retryWrites=true&w=majority",

{
    useNewUrlParser:true
}
    
)


app.use("/api/blog",blogRoute)

app.use("/api/post",postRoute)


app.listen(3001,()=>{
    console.log("server running")
})