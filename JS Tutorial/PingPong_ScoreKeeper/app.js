const p1Button=document.querySelector('#p1Button')
const p2Button=document.querySelector('#p2Button')

const p1Display=document.querySelector('#p1Display');
const p2Display=document.querySelector('#p2Display');


const resetButton=document.querySelector('#reset')
let p1Score=0;
let p2Score=0;

let isGameOver=false;


let winningScore=5;
 p1Button.addEventListener('click',function (){

     if(!isGameOver)
     {
         p1Score++;
         if(p1Score===winningScore)
         {
             isGameOver=true;
         }
         p1Display.textContent=p1Score;
     }

 })

p2Button.addEventListener('click',function (){

    if(!isGameOver)
    {
        p2Score++;
        if(p2Score===winningScore)
        {
            isGameOver=true;
        }
        p2Display.textContent=p2Score;
    }

})
