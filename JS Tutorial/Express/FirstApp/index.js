const express=require("express")
const app=express();

// app.use((req,res)=>{
//     console.log("We got a new request")
//    //res.send("Hello we got your response!!!")
//    //res.send({color:"red"})
//    res.send('<h1>THis is mine</h1>')
// })


app.get('/',(req,res)=>{
    res.send("This is the homepage")
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}=req.params
    res.send(`<h1>Viewing Post ID ${postId} on the subreddit ${subreddit}`)
})

app.get('/search',(req,res)=>{
    //console.log(req.query)
    const {q}=req.query;
    if(!q)
    {
        res.send("Bruh!!Nothing found if nothing searched")
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('/cats',(req,res)=>{
    //console.log("CAT REQUEST")
    res.send("MEOW!!")
})

app.get('/dogs',(req,res)=>{
    //console.log("CAT REQUEST")
    res.send("WOOF!!")
})

app.post('/cats',(req,res)=>
{
    res.send("This is a post request to /cats different from get request")
})


app.get('*',(req,res)=>{
    res.send("I dont know that path")
})

app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000")
})

