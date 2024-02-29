const myMath={
    PI:3.141,
    add:function(x,y) {return x+y;},
    cube:function(x){return x**3;},
}

const cat={
    name:"Blue Steele",
    color:"Grey",
    breed:'Scottish fold',
    meow(){
        console.log("This is :",this)
        console.log(`${this.name} says meowwww!!!`)}

}

cat.meow()

const meow2=cat.meow;
meow2()

