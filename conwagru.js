class student1{
    constructor(name,rollno1){
        this.sname=name;
        this.rollno=rollno1;
    }
    display(){
        console.log("Studend name is "+this.sname+" and roll no : "+this.rollno);
    }
}
let s1=new student1("Manoja",1275);
s1.display();