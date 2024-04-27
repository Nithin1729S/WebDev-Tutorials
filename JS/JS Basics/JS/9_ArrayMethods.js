const nums=[0,1,2,3,4,5,6,7,8,9]
nums.forEach(function (n) {console.log(n*n)});

const squares=nums.map(function (i){return i**2;})
console.log(squares)
console.log(squares.length)

const add_normal=function(x,y){
    console.log(x+y);
}

add_normal(3,8)

const add_short=(x,y)=>{console.log(x+y);}
add_short(9,1)





