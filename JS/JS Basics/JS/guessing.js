let maximum=parseInt(prompt("Enter the maximum number"))
while(!maximum){
    maximum=parseInt(prompt("Enter the valid maximum number"))

}


const targetnum=Math.floor(Math.random()*maximum+1)

let guess=parseInt(prompt("Enter your guess: "))
let count=1
while(parseInt(guess)!==targetnum){
    if(guess==='q'){
        break
    }
    count+=1;
    if (guess>targetnum){
        guess=prompt("Too High!! Enter a new guess: ")

    }else{
        guess=prompt("Too Low!! Enter a new guess: ")

    }
}

if (guess==='q'){
    console.log("OK, You Quit!")

}else{
    console.log("CONGRATS YOU WIN!!")
    console.log(`You got it! It took you ${count} guesses.`)
}
