class bike{
    display(){
        console.log("HERO bike");
    }
}
class newBike extends bike{
    display1(){
        console.log("newBike class method");
    }
}
let b1=new newBike();
b1.display();
b1.display1();
