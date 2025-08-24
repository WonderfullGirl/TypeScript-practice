"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi My name IS ${this.name} and my age is ${this.age} years old`);
    }
}
const person1 = new Person("Mona", 30);
person1.introduce();
class Car {
    constructor(brand, color, model, year) {
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.year = year;
    }
    showCarInfo() {
        console.log(`${this.brand}........... ${this.color}........${this.model}.......${this.year}`);
    }
}
const car1 = new Car("BMW", "White", "Sport", 2022);
car1.showCarInfo();
class User {
    constructor(name, email, status) {
        this.name = name;
        this.email = email;
        this.status = status;
    }
    getUserInfo() {
        console.log(`Nmae is: ${this.name} status is: ${this.status}`);
    }
    updateUserInfo(newStatus) {
        this.status = newStatus;
    }
    getEmail() {
        return this.email;
    }
}
class Admin extends User {
    constructor(name, email, status) {
        super(name, email, status);
    }
    getSdminInfo() {
        console.log(`${this.name} .....${this.email}`);
    }
    getEmailAcces() {
        console.log(this.getEmail());
    }
}
const user1 = new User("sara", "sara@gmail.com", "active");
user1.getUserInfo();
user1.updateUserInfo("inactive");
console.log(user1.name);
console.log(user1.email);
Generics;
function showFirst(arr) {
    return arr[0];
}
console.log(showFirst(["Amin", "Amir", "sara"]));
console.log(showFirst([200, 300, 400]));
const box1 = { content: 500 };
const box2 = { content: "sara" };
class DataHolder {
    constructor(value) {
        this.data = value;
    }
    getData() {
        return this.data;
    }
}
const numberHolder = new DataHolder(90);
console.log(numberHolder.getData());
//# sourceMappingURL=index.js.map