console.log(typeof 6)
console.log(200 * (0/0))

let year=2003;
console.log(year)

let i =4;
console.log(i++)   //this is 4
console.log(i)    //this is 5


let j =4;
console.log(++j)   //this is 4
console.log(j)    //this is 5

let animal="Octopus"
console.log(animal.length);
console.log(animal[-1])   //undefined
console.log(animal[6])
console.log(animal[600])  //doesnt throw a error but gives undefined

console.log("lol".length)

console.log("lol"+animal);

console.log("lol".toUpperCase())
console.log(animal.toUpperCase())
console.log(animal)

let userInput="    hello my name is vincent goh    "
console.log(userInput.trim())
console.log(userInput)
console.log(userInput.indexOf("h"))

console.log("hello".slice(0,5))

console.log("hello".replaceAll("l","L"))

console.log("lol".repeat(3))

//String Template Literal

let msg=`I have ${3+4+8} clocks in my house`;    //make sure to use dollar sign ,flower brackets and backticks
console.log(msg)


