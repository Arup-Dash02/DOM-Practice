// const element1 = document.getElementById("demo");
// const element2 = document.getElementsByTagName("ul");
// console.log(element1);
// console.log(element2);
// let a = {
//   fname: "Arup",
//   lname: "Dash",
//   age: 23,
//   fullname: function () {
//     return this.fname + " " + this.lname;
//   },
// };

// const person = {};
// const person = new Object();
// person.fName = "Ashok";
// person.lName = "Dash";
// console.log(person);

// const person = {
//   name: "Dumbura",
//   age: "63",
//   kama: "Anya katha re munda pureiba",
// };

// for (let x in person) {
//   console.log(person[x]);
// }
// console.log(person);
// delete person.kama;
// console.log(person);

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   today: new Date(),
// };

// let txt = "";
// for (let x in person) {
// txt += person[x] + " ";
// };
// const arr = Object.values(person);

// document.getElementById("demo").innerHTML = typeof arr;
// console.log(arr);
// Any JavaScript object can be converted to an array using Object.values():
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
// let myString = JSON.stringify(person);
// console.log(myString);
// let jsonFile = JSON.parse(myString);
// console.log(jsonFile);

// let arr = ["Arup", "Dash", "23"];
// console.log(JSON.stringify(arr));

// Getters and setters allow you to define Object Accessors
// const person = {
//   fname: "Abinash",
//   lname: "Dash",
//   nickname: "Papi",
//   get name() {
//     return this.nickname;
//   },
//   fullname: function () {
//     return this.fname + " " + this.lname;
//   },
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   },
// };
// document.getElementById("demo").innerHTML = person.name;
// document.getElementById("demo2").innerHTML = person.fullname();
// person.lang = "en";
// document.getElementById("demo3").innerHTML = person.language;

// const obj = {
//   counter: 0,
// };
// The Object.defineProperty() method can also be used to add Getters and Setters:
// Object.defineProperty(obj, "reset", {
//   get: function () {
//     this.counter = 0;
//   },
// });
// Object.defineProperty(obj, "increment", {
//   get: function () {
//     this.counter++;
//   },
// });
// Object.defineProperty(obj, "decrement", {
//   get: function () {
//     this.counter--;
//   },
// });
// Object.defineProperty(obj, "add", {
//   set: function (value) {
//     this.counter += value;
//   },
// });
// Object.defineProperty(obj, "subtract", {
//   set: function (value) {
//     this.counter -= value;
//   },
// });
// obj.increment;
// console.log(obj.counter);
// obj.reset;
// console.log(obj.counter);
// obj.add = 5;
// console.log(obj.counter);
// obj.subtract = 2;
// console.log(obj.counter);

// --------------------------------
// js object using constructor(It is a blueprint for creating many objects)
// function Person(name, age, gender) {
//   this.fullname = name;
//   this.age = age;
//   this.gender = gender;
//   this.village = "Sathiatikiri";
// }

// const p1 = new Person("Arup Dash", 22, "male");
// const p2 = new Person("Abinash Dash", 30, "male");
// p1.nickname = "papi";
// console.log(p1);
// console.log(p2);
// ---------------------------------------
// JavaScript has built-in constructors for native objects:
// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object

// The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
// -----------------------------------------
// you can not add a new property to an existing object constructor
// Sometimes you want to add new properties (or methods) to all existing objects of a given type. Sometimes you want to add new properties (or methods) to an object constructor.
// The JavaScript prototype property allows you to add new properties to object constructors:

// function Person(name, age, gender) {
//   this.fullname = name;
//   this.age = age;
//   this.gender = gender;
//   this.village = "Sathiatikiri";
// }
// const p = new Person("Arup", 22, "male");
// Person.prototype.nationality="Indian";
// console.log(p);

// -----------------------------------------
// JavaScript Iterables
// Iterable objects are objects that can be iterated over with for..of.
// You can use a for..of loop to iterate over the elements of a string:
// for(const x of "Arup Dash"){
//   console.log(x.toUpperCase());
// }
// You can use a for..of loop to iterate over the elements of an Array:
// const arr=[1,2,34,5,6]
// for(const x of arr){
//   console.log(x);
// }

