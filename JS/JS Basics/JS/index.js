console.time("Your code took"); //This will show the time took took run all this code from here to timeEnd.Dont clear console between these two commands

console.log("Hello Console");
console.log(4 + 34);
// All the stuff you write here is being outputted in the console section of inspect.You can use calculator in console tab too.But there  if you reload it will go away.
console.log(56); //Just displays 56 on console
// Console.log means that write this as it is as a log in console
console.log(true);
console.log([1, 2, 4, 5]);  //will create an array
console.log({ harry: "this", marks: "34" }); //this is a js object

console.table({ harry: "this", marks: "34" }); //shows objects  in a  table

console.warn("This is a warning");

//console.clear()    this will clear the console.all the things above will be cleared

//Semicolon should be added technically to indicate that you are ending a code statement.But JS is a forgiving language and will autmatically assume a semicolon.

console.timeEnd("Your code took");

console.assert(566 < 189, "Age greater than 189 is not possible"); //This will throw an error if the condition fails.566 here will be delivered by a variable in its place

console.error("This is an error"); //to write error manually

//  To write single line comment use // once
/*To write multi line 
comment use /* twice */
