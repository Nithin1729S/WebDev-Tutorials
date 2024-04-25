// fetch("https://catfact.ninja/fact")
//     .then((res) => {
//         console.log("Resolved", res);
//         return res.json();

//     })
//     .then((data) => {
//         console.log("JSON Done", data);
//         return fetch("https://catfact.ninja/fact")
//     })
//     .then((res)=>{
//         console.log("Second req done");
//         return res.json();
//     })
//     .then((d)=>{
//         console.log(d)
//     })
//     .catch((e) => {
//         console.log("ERROR", e);
//     });


const loadCatFacts=async()=>{
    const res=await fetch('https://catfact.ninja/fact');
    const data=await res.json();
    console.log(data.fact);
    // console.log(res);
};

loadCatFacts();