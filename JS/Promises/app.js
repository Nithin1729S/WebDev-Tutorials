const delayedColorChange=(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}

delayedColorChange('red',1000)
.then(()=>(delayedColorChange('yellow',1000)))
.then(()=>(delayedColorChange('blue',1000)))
.then(()=>(delayedColorChange('green',1000)))
.then(()=>(delayedColorChange('black',1000)))
.then(()=>(delayedColorChange('white',1000)))
.then(()=>(delayedColorChange('cyan',1000)))
.then(()=>(delayedColorChange('pink',1000)))
