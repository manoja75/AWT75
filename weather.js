async function display(){
    let name=document.getElementById("city");
    const url='https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=14a9455afe9281bde29cfb9d0d855c0d&units=metric'
    const response=await fetch(url);
    var data=await response.json();
    let {main:{temp,temp_min,temp_max}}=data;
    console.log("min temp:",temp_min);
    console.log("max temp:",temp_max);
    console.log(" temp:",temp);
   
}