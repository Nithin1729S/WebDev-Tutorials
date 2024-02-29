const makeRandomColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
const btn=document.querySelector("#btn")
const container=document.querySelector("#container")

container.addEventListener("click",function(){
    container.classList.toggle("hide")
})



btn.addEventListener("click",function(e){
    container.style.backgroundColor=makeRandomColor();
    e.stopPropagation();
})