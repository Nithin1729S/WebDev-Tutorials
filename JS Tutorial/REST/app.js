// function sum(){
//     console.log(arguments);
// }

function sum(...nums)
{
    return nums.reduce((tot,curr)=>tot+curr)
}

const user={
    email:"sureshnithin1729@gmail.com",
    username:"nithin1729s",
    password:"hcvnit730",
    firstName:"Nithin",
    lastName:"S"
};

function fullName({firstName,lastName})
{

    return `${firstName} ${lastName}`
}
