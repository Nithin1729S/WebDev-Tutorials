const nums=[1,2,3,4,5];

nums.reduce((accumulator,curr)=>{
    return accumulator+curr;
})

const mn=nums.reduce((min,n)=>{
    if(n<min) min=n;
    return min;
})

console.log(mn);