async function display(){
    const url='https://imdb-api.com/API/AdvancedSearch/k_5nwrk48b?user_rating=8.0,10&release_date=2019-01-01,2022-01-01&colors=color&countries=in&languages=te';
    const response=await fetch(url);
    var data=await response.json();
    return Promise.resolve(data);
}
    display().then(function(data){
        let{results}=data;
        table=document.getElementById("table");
        results.forEach(element=>{
            let {title,imDbRating,stars}=element;
            table.innerHTML+='<tr><td>'+title+'</td><td>'+imDbRating+'</td><td>'+stars+'</tr>';
        })
    },
   function(){
       console.log("URL not found");
   })
