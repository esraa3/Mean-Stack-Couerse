
//Question 1 : Answer The Following Questions (10 points) 


//1- What is an Event Loop ?
console.log("Question 1.1 :It works by having the program keep track of all the events or tasks that need to be processed, and then processing them one by one as they come in. This can be a very efficient way to handle a lot of events or tasks, as it prevents the program from getting bogged down by having to process everything at once.");

// It works by having the program keep track of all the events or tasks that need to be processed, and then processing them one by one as they come in. This can be a very efficient way to handle a lot of events or tasks, as it prevents the program from getting bogged down by having to process everything at once.

//2- How do you add an element at the begining of an array? How do you add one at the end? Hint[ 2 ways ] 
//How do you add an element at the begining of an array? -->unshift()
console.log("Question 1.2.1 :unshift()");
//How do you add one at the end?push()
console.log("Question 1.2.2 :push()");


//Question2 : What is The Output ?

// var x = 1; // 1
// function outer() {
//     var x = 2; //2
//     function inner() {
//         x++; //und
//         var x = 3; //3
//         console.log(x); //3
//     }
//     inner();
// }
// outer();


console.log("Question 2.1: 3");

// for (let i = 0; i < 5; i++) {
// setTimeout(f=>{
//     console.log(i);
// },i*1000)    
// }
console.log("Question 2.2: after each sec will print i starting from 0 to 4 so result is (0,1,2,3,4)");

// let arr =["x","y"];
// arr.length=0;
// arr.push("q");
// console.log(arr);
console.log("Question 2.3 : result will be ['baz']");

// function func(){
// for (let key in arguments) {
//     console.log(arguments[key]);
// }
// };
// func(1,"hello",true);
console.log("Question 2.4 : result will be 1 ,Hello ,true");

// let car ={
//     carname:"BMW",
//     carPrice:1000
// }
// console.log(car instanceof Object);
// console.log(Object.entries(car));
console.log("Question 2.5 : first log result will be true");
console.log("Question 2.5 : sec log will return the object to an array");




//Question 3 
//3.1:Create Function sumObjectValues() that will sum all values of
//the fields that contain numbers . ensure that iteration is
//done only over own property of the object 
class Student {
    name = '';
    grade = 0;
    pastGrade = 0;
    constructor(name, pastGrade, grade) {
        this.name = name;
        this.pastGrade = pastGrade;
        this.grade = grade;
    }
}

function sumObjectValues(student) {
    let sum = 0;
    for (let index in student) {
        let element = student[index];
        if (typeof(element) == 'number') {
            sum += element;
        }
    }
    console.log("Question 3.1: sum is = "+sum);
}
let student = new Student("esraa", 100, 50);
sumObjectValues(student);
//3.2:Show the execution of 3 asynchronous block of code, one after the other in sequence
function createPromise(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('Question 3.2: success');
        } else {
            reject('Question 3.2: error');
        }
    });
}

let newPromise = createPromise(true);

newPromise.then(function (data) {
    console.log(data);
    return createPromise(false);
})
    .catch(function (error) {
        console.log(error);
    });

//3.3 Get the maximum value from a numbers array along with its index
const Arr = [2,6,8,11,50,7,3,1];
function getMax (arr){
   //let max = Math.max(...arr);
   let max = Math.max.apply(null, arr)
   let index = arr.indexOf(max);
   console.log("Question 3.3: Max is : " + max +" and it's index is :" +index);

}
getMax(Arr);

//3.4:Write a function which accepts two valid dates and returns the difference between them as number of days
function GetDiffDays (date1 , date2)
{
    date1 = Date.parse(date1);
    date2 = Date.parse(date2);
    let diff = Math.abs((date2-date1)/ (1000 * 60 * 60 * 24));
    console.log("Question 3.4: Difference between 2 dates is : "+diff +" Days");

}
GetDiffDays('2022-11-29','2022-11-20');

//3.6 :Write a function which can return multiple values from a function
function returnNames (fname,sname){
    return console.log("Question 3.6:"+[fname,sname]);
}
returnNames("Esraa","Ali");

//3.7:Write a function to reverse an array.
function reverse (arr){
    let res =arr.reverse();
    console.log("Question 3.7 : res "+ res);
}
const arr = [1, 2, 3, 4];
reverse(arr);

//3.8 :Write a function that converts an object into an array, where each
//element represents a key-value pair in the form of an array
function Convert (object){
    let res =Object.entries(object);
    console.log("Question 3.8 : res ");
    console.log(res);
}
const conObject = {
    name:'esraa',
    id:1234
}
Convert(conObject);
//Bonus ++.
//point 1 :Write a function which can convert the time input given in 12 hours format to 24 hours format

//Bonus ++.
//point 2 :Make this syntax possible: var a = add(2)(3); //5
var add = function(x) {
    return function(y) { return x + y; };
}
var a = console.log("Bonus ++ : point 2 : "+ add(2)(3));
//Bonus ++.point 3
const Name_Arr = ["Ahmed", "hend", "Hassan", "John", "Samir"];
function findName(name) {
    let found_name = Name_Arr.find(n => name.toLowerCase() == n.toLowerCase());
    console.log("Bonus ++ : point 3 :Name :" + found_name + " is found ");
}
findName("john");


