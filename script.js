/*
////////////////////////////////////
//Linking a Javascript File
let js = "amazing";
//if (js === "amazing") alert("Javascript is FUN!");
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
//Values and Variables
console.log('Jones')
console.log(23)

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programming";
let myCurrentJob = "Teacher";

let job1 = "Programming";
let job2 = "Teacher";

console.log(myFirstJob);

//////////////////////////////////////////
//Data Types
let JavascriptIsFun = true;
console.log(JavascriptIsFun);

// console.log(typeof true);
console.log(typeof JavascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jones');

//dynamic typing
JavascriptIsFun = 'YES!';
console.log(typeof JavascriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year)

year = 1999;
console.log(typeof year);

console.log(typeof null)

////////////////////////////////////
//let,constand var
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

var job = 'programmer';
job = 'teacher';

lastName = 'Oyindamola';
console.log(lastName)    */

////////////////////////////////////
//Basic Operators
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)


console.log(ageJonas * 2, ageJonas / 10, 2** 3);
//2 ** 3 means 2 to the power of 3 = 2*2*2


const firstName = 'Oyindamola';
const lastName = 'Agboola';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; //15
x +=10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 = 101
x--;
x--;
console.log(x);

//Comperison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now-1991 > now - 2018);




