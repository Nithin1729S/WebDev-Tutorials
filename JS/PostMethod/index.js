const express=require("express")
const app=express()
app.use(express.urlencoded({extended:true}))
app.listen(3000,()=>{
    console.log("Listening at port 3000")
})

app.get('/tacos',(req,res)=>{
    res.send("Get /tacos response")
})

app.post('/tacos',(req,res)=>{
    // res.send("Post /tacos response")
    // console.log(req.body)

    const {meat,qty}=req.body
    res.send(`Here is ${qty} bags of ${meat}`)
})