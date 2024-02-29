console.log("Hello!!!")
setTimeout(()=>{console.log("Are you still there?")},3000);
console.log('Fuck Off')

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);
//
//
// clearInterval(10);

const id=setInterval(() => {
    console.log(Math.random())
}, 1000);


setTimeout(()=>{clearInterval(id)},10000)