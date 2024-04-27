//https://catfact.ninja/fact

// axios.get('https://catfact.ninja/fact')
// .then((res)=>{
//     console.log(res.data.fact);
// })

const getCatFacts=async ()=>{
    try{
        const res=await axios.get('https://catfact.ninja/fact')
    console.log(res.data.fact)
    }
    catch(e){
        console.log("Error",e)
    }
    
}

// getCatFacts();

const jokes=document.querySelector('#jokesList');

const getDadJoke=async()=>{
    const config={headers:{Accept:'application/json'}}
    const res=await axios.get("https://icanhazdadjoke.com/",config);
    // console.log(res.data.joke);
    const newLi=document.createElement('li');
    newLi.append(res.data.joke);
    jokes.append(newLi)
}

// getDadJoke()
const button=document.querySelector('button');
button.addEventListener('click',getDadJoke);