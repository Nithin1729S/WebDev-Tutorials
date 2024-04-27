const form=document.querySelector('#searchForm');
form.addEventListener('submit',async function(e){
    // console.log('hi')
    e.preventDefault();
    // console.dir(form)
    // console.log(form.elements.query.value)
    const searchTerm=form.elements.query.value;
    const config={params:{q:searchTerm}}
    // const searchQuery=`https://api.tvmaze.com/search/shows?q=${searchTerm}`
    const res= await axios.get('https://api.tvmaze.com/search/shows',config);
    // console.log(res.data[0].show.image.medium);
    // const imgURL=res.data[0].show.image.medium;
    for(let result of res.data)
    {
        const imgURL=result.show.image.medium;
        const img=document.createElement('img');
        img.src=imgURL;
        document.body.append(img)
    }
    form.elements.query.value="";

    
})

