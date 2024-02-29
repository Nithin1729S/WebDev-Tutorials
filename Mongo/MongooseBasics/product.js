const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(()=>{
    console.log("CONNECTION OPEN!!!")
})
.catch(err=>{
    console.log("Errror!!!!")
    console.log(err)
})


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxLength:20
    },
    price:{
        type:Number,
        required:true,
        min:[0,"Price must be positive"]
    },
    onSale:
    {
        type:Boolean,
        default:false
    },
    categories: [String],   //array of string
    qty:
    {
        online:{
            type:Number,
            default:0
        },
        inStore:
        {
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum:['S','M','L']
    }
    

});

const Product=mongoose.model('Product',productSchema);

const bike=new Product({name:'Mountain Bike',price:599,categories:["Cycling","Safety"]})
bike.save()
    .then(data=>{console.log("IT WORKED")
                console.log(data)
})
.catch(err=>console.log("Error"))




