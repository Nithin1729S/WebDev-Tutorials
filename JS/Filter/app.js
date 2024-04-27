const nums=[1,2,3,4,5,6,89];

const odds=nums.filter(n=>{return n%2==1})

console.log(odds)

if(nums.every((n)=>(n<10)))
{
    console.log("YES!!!!")
}
else
{
    console.log("NOOOOO")
}


if(nums.some((n)=>(n<10)))
{
    console.log("YES!!!!")
}
else
{
    console.log("NOOOOO")
}