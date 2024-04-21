/*
Prototypes in JS:
-----------------
A javascript object is an entity having state and behavior(properties and method)
Js object have a special property called prototype(reference to an object).
we can set prototype using __proto__

** If object & prototype have same method object's method will beused.
*/

const student = {
    fullName: "Pradeep Kumar Verma",
    marks: 82.67,
    printMarks: function () {
        console.log("marks = ", this.marks); //student.marks
    }
}

const employee = {
     calTax() {
        console.log("tax rate is 10%");
     }
};

const karanArjun1 = {
    salary: 50000,
    calTax() {
        console.log("tax rate is 20%");
    }
};

const karanArjun2 = {
    salary: 50000
};

const karanArjun3 = {
    salary: 50000
};

karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;


/*
Classes in JS:
-----------------
Class is a program-code template for creating objects.
Those objects will have state(varibles) & some behaviour(functions) inside it.

class MyClass {
    constructor() {...}
    myMethod(){...}
}

let myObj = new MyClass();
*/

 
class Car {
    constructor(brand, mileage) {
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    
    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
}

let fortuner = new Car("fortuner", 10);
// fortuner.setBrand("fortuner");
let nexus = new Car("nexus", 12);
// nexus.setBrand("nexus");


/*
Inheritance in JS:
-----------------
Inheritance is passing down properties & methods from parent class to child class.
class Parent {

}

class Child extends Parent {

}

**If Child & Parent have same method, child's method will be used.[Method Overriding]
*/

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}

let obj =new Child();

class Person {
    constructor() {
        // console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person{
    constructor(branch) {
        // console.log("enter child constructor");
        super(); //to invoke parent class constructor
        this.branch = branch;
        // console.log("exit child constructor");
    }
    work() {
        console.log("solve problems, bild somethings");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let pradeepObj = new Engineer();


/*
super Keyword:
-------------
The super keyword is used to call the constructor of it's parent class to access the parent's properties and method.

super(args) //class Parent's constructor
super.parentMethod(args)
*/

/*
Practice:
---------
Qs. You are creating a website for your college. create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.

QA\s. Create a new class called Admin which inheretis from User. Add a new method called editData to Admin that allows it to edit website data.
*/
let DATA = "Secret Information"

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data is: ", DATA);
    }

}

let student1 = new User("Pradeep", "pradeep@gmail.com")

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new Data";
    }
}

let admin1 = new Admin("admin1", "admin1@gmail.com");
