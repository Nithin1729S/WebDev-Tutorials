//var vs let in JS
/* 1)var is globally scoped while let and const are block scoped
   2) var can be updated and re declared within its scope
   3)let can be updated but not re declered
   4) const can  neither be updated nor re declered
   5) const must be initialized during decleration unlike let and var
   6) var variables are initialised with undefined whereas let and const variables are not initialized*/

//var is not used anymore to define a variable .It was used before ES6(ecama script 6). var brings bugs(not errors) in your code.So we avoid it
// Firstly in JS var was used to declare variables
// nowadays we use let or const

// const is used to declare constants.Constants are those identifiers whose value you cant change throughout the code

// let is used to declare block scoped variables

console.log("JS tutorial 3 ");
var a = 67;
var a = 69; //var takes this value globally
var b = "harry";
var c = null;
var d = undefined;
console.log(a);
console.log(b); //this would print harry
{
  var b = "this";
  console.log(b); //this would print this
}
console.log(b); //this would print this

let e = "lol";
//e = 5 this will change  lol to 5 and assign a new value to lol
// let e = "lolz" This would give you an error coz let cant be redeclared.But you can use "e = 4" coz this is not redeclaring it is assigning 
console.log(e); //prints lol
{
  let e = "hi";
  console.log(e); //prints hi "only" inside the block
}
console.log(e); //prints lol

//observe 27 and 36  line you will see that var has declared this as the value of b globally whereas let has declered hi aš the value of e only inside the block because let is block scoped.


const author = "harry"

// let author = "harry"  This would throw an error as const cannot be changed .You cant assign anything to a const variable too.

// const harry ;  This would throw an error as you didnt initialize  the const variable 

// Avoid var ....Use const  when you are confused you cann change it to let later 