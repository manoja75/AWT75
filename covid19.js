async function display(){
    let name=document.getElementById("city");
    const url='https://api.track-covid19.in/district_v2.json'
    const response=await fetch(url);
    var data=await response.json();
    let ss=name.value;
    let {ss:{active,confirmed,dead}}=data;
    console.log("active:",active);
    console.log("conformed:",confirmed);
    console.log("dead:",dead);
   
}