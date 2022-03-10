class emp{
    static display(){
        console.log("hi from parent class");
    }
}
class emp1 extends emp{
    display(){
        console.log("hi from child class");
    }
}
let e1=new emp1();
emp1.display();