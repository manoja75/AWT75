class bike{
    constructor(no){
        this.bikeNo=no;
    }
    display(){
        console.log("HERO bike no : "+this.bikeNo);
    }
}
class newBike extends bike{
    constructor(no1,model){
        super(no1);
        this.model=model;
    }
    display1(){
        console.log("newBike no is : "+this.bikeNo+" and mode is : "+this .model);
    }
}
let b1=new newBike(1234,"5G");
b1.display1();
b1.display();
