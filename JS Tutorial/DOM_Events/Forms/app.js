
const form = document.querySelector('form');
const list=document.querySelector("#list");
const input1=document.querySelector("#product");
const input2=document.querySelector("#qty")

form.addEventListener("submit",function(e){
    e.preventDefault();
    const product=input1.value;
    const qty=input2.value;
    const newLI=document.createElement("LI");
    newLI.innerText=`${qty} ${product}`;
    list.append(newLI);
    form.reset();

})


