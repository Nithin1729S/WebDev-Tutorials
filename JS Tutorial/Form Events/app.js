const form=document.querySelector('#shelterForm');
const input=document.querySelector('#catName');
const list=document.querySelector('#cats');

form.addEventListener('submit',function(evt){
    console.log(input.value)
    evt.preventDefault();
    const newLi=document.createElement('li');
    newLi.innerText=input.value;
    list.append(newLi);
    input.value="";

})


