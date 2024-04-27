const express=require("express")
const app=express()
// app.use(()=>{
//     console.log("We got a request")
// })
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params
    res.send(`<h1>This is ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}=req.params
    res.send(`<h1>This is Post ${postId} of ${subreddit} subreddit</h1>`)
})

app.get('/search',(req,res)=>{
    console.log(req.query)
    const {q}=req.query;
    if(!q)
    {
        res.send('<h1>No matching results</h1>')
    }

    res.send(`<h1>Search Results for: ${q}</h1>`)
})

app.get('/cats',(req,res)=>{
    res.send('<h1>Meow</h1>')
})

app.get('/dogs',(req,res)=>{
    res.send('<h1>Bark</h1>')
})


// app.use((req,res)=>{
//     res.send({color:"red"})
// })
