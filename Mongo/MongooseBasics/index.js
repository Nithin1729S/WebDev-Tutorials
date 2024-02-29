const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')

.then(()=>{
    console.log("Conncetion Open!!")
})
.catch(err=>{
    console.log("Errror")
    console.log(err)
})



const movieSchema=new mongoose.Schema({
    title:String,
    year: Number,
    score:Number,
    rating:String
});

const Movie=mongoose.model('Movie',movieSchema);
// const amadeus= new Movie({title:'Amadeus',year:1986,score:9.2,rating:'R'})

Movie.insertMany(
    [
        {title:'Amelie',year:2003,score:8.2,rating:'R'},
        {title:'Alien',year:1979,score:9.2,rating:'R'},
        {title:'The Iron Gaint',year:1999,score:7.2,rating:'PG'},
        {title:'Stand By Me',year:1986,score:8.2,rating:'R'},
        {title:'Moonrise Kingdom',year:2012,score:9.52,rating:'PG-13'},
    ]
)

    .then(data=>{
        console.log("It worked!!")
        console.log(data);
    })

    