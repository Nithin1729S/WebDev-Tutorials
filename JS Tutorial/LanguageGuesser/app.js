import {franc} from 'franc';
import langs from 'langs'
// const colors=require("colors")
import colors from 'colors'

const input=process.argv[2];
// console.log(input)
// const langs=require('langs')
const res = franc(input);
// console.log(res);
if(res=='und')
{
    console.log("Couldnt Figure out".red)
}
else
{
    const r=langs.where("3",res)
    console.log(`Our Best Guess is ${r.name}`.green)
}
