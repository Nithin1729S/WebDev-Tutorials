let input=prompt("What do you like to do?");
const todos=[];
while(input!=='quit'&& input!=='q'){
    if(input==='list'){
        console.log("**************************")
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**************************");
    }else if(input==='new'){
        const newTodo=prompt("Ok,What is the new todo? ");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list.`);



    }else if(input==='delete'){
        const idx=parseInt(prompt("Ok,Enter an index to delete: "));
        if (!Number.isNaN(idx)) {
            const deleted = todos.splice(idx, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }else{
            console.log("Unknown Index");
        }
    }
    input=prompt("What do you like to do?");
}

console.log("OK QUIT THE APP!");


