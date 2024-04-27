const express=require("express")
const app=express();
const path=require('path');
const redditData=require('./data.json')
// console.log(redditData)

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname,'public')))

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})

app.get('/',(req,res)=>{
    // res.send("Hi")
    res.render('home')
})

app.get('/rand',(req,res)=>{
    const num=Math.floor(Math.random()*10)+1;
    res.render('random.ejs',{rand:num})
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data=redditData[subreddit];
    if(data)
    {
        res.render('subreddit',{...data})

    }else{
        res.render('notfound',{subreddit})
    }
})

app.get('/cats',(req,res)=>{
    const cats=[
        'Blue','Rocket','Monty','Stephanie','Winston'
    ]
    // res.send(cats)
    res.render('cats',{cats})
})