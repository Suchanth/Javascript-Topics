//Class in Javascript
//Example1
class Employee{
    employeename="Ramesh";
}
let employee=new Employee();
console.log(employee.employeename);
let employee1=new Employee();
employee1.employeename="Suresh";
console.log(employee1.employeename);
let employee2=new Employee();
employee2.employeename="Kamalesh";
console.log(employee2.employeename);

//Example2
class Student{
    studentname="Rajesh";
    print(){
        console.log(this.studentname);
    }
}
let student=new Student();
student.print();
let student1=new Student();
student1.studentname="Raj";
student1.print();
let student2=new Student();
student2.studentname="Kumar";
student2.print();

//A constructor is a special function that creates and initializes an object instance of a class.
//static keyword defines the static method ,field or a class and static initialization block.
//static keyword-common variables/methods for class and accessed with className
class User{ //base class,super class,parent class
    static numberOfusers=0;
    constructor(name,age){
        //instance variables
        this.name=name;
        this.age=age;
        User.numberOfusers++;
    }
    login(){
        console.log("Hi "+this.name);
        console.log("You are now logged in");
    }
    logout(){
        console.log("You are logged out");
    }
    static displayUser(){
        console.log("Total number of Users: "+User.numberOfusers++);
    }
}

let userone= new User("Rakesh",34);
let userTwo=new User("Madhesh",45);
let userThree=new User("Ram",35);
userone.login();
userTwo.login();
userThree.login();
//console.log("Number of Users: "+User.numberOfusers);
User.displayUser();

//Inheritance
//Inheritance in JavaScript is defined as the ability of a class to derive properties and characteristics from another class while having its own properties as well.
//derived class,child class,sub class
class PaidUser extends User{
    constructor(name,age){
        super(name,age)
    }
    message(){
        console.log("You have received a message");
    }
    //overriding
    login(){
        console.log("You have executed program successfully");
        return this
    }
}
let Paiduser1= new PaidUser("Sam",34);
Paiduser1.login();
Paiduser1.message();

//method chaining
Paiduser1.login().message();

//prototype
function Name(name,age){
    this.name=name;
    this.age=age;

}
Name.prototype.login=function(){
    console.log("Hi "+this.name);
    console.log("You are loggged in");
}
let user1=new Name("Edwin",34);
user1.login();

//Getters and Setters
class Temperature{
    constructor(temp){
        this._temp=temp;
    }
    get temp(){
        return `${this._temp} degree celsius`;
    }
    set temp(temp){
        if(temp>100){
            temp=100;
            this._temp=temp;
        }

    }
}
let temp1=new Temperature(150);
temp1.temp=160;
console.log(temp1.temp);
console.log(temp1._temp);