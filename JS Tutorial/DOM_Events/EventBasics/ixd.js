const btn=document.querySelector("#v2")
btn.onclick=function (){
    console.log("You Chose Better")
    console.log("I hope it works")
}
function scream()
{
    console.log("AHHHHHHHHHHHHHHH")
    console.log("STOP TOUCHING ME!!!")
}


btn.onmouseenter=scream;


const h1=document.querySelector("h1")
h1.onclick=()=>{
    alert('You Clicked Me')
}


const btn3=document.querySelector("#v3");
btn3.addEventListener("dblclick",()=>{alert("Clicked")})

function twist(){
    console.log("TWIST");
}

function shout(){
    console.log('Shout');
}


document.querySelector("#v4").addEventListener("click",twist)
document.querySelector("#v4").addEventListener("click",shout)






