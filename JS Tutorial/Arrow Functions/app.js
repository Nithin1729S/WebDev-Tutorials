const add_arrow=(x,y)=>{return x+y};

const dieroll=()=>(
    (Math.floor(Math.random()*6+1))
)

const person={
    firstName:"Nithin",
    lastName:"S",
    fullName: function(){
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },

    fullNameArrow:()=>{
        console.log(this); //window
        return `${this.firstName} ${this.lastName}`
    },

    shoutName() {
        setTimeout(() => {
            console.log(this.fullName());
        }, 3000);
    }

}