const nums=[1,2,3,4]
console.log(Math.max(nums));
console.log(Math.max(...nums));

const dataFromForm={
    email:'sureshnithin1729@gmail.com',
    password:'hcnit720',
    username:'nithin1729s'
};

const newUser={...dataFromForm,id:1,isAdmin:false};