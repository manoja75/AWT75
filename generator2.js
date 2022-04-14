//generator using yeild
function* generatorfun(){
    yield 10;
    
    console.log("WELCOME");
    console.log("CVR COLLEGE");
    yield 20;
    yield 30;

}
var a=generatorfun();
console.log("HI");
console.log(a.next());
console.log("Engineering");
console.log(a.next());
console.log("IT Dept");
console.log(a.next());
