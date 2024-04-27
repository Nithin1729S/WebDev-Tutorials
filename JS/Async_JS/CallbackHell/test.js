
setTimeout(()=>{document.body.style.backgroundColor="red";
    setTimeout(()=>{document.body.style.backgroundColor="yellow";
        setTimeout(()=>{document.body.style.backgroundColor="cyan";
            setTimeout(()=>{document.body.style.backgroundColor="olive";
                },2000)
        },2000)
    },2000)
},2000)



const delayedColorChange=(newColor,delay)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newColor;
    },delay)

}

