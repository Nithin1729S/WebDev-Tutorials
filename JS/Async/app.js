async function hello(){
    const rand=Math.random();
    if(rand>0.5)
    {
        return "Hurray!!"
    }
    else{
        throw new Error("Loserrrr")
    }
}

hello()
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})