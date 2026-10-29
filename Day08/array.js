//  These second array we will learn about Array Method 

// ! ForEach() Method 
// let arr = [1, 2, 3, 4, 5];

//  arr.forEach(function (el){
//     console.log(el);

//  })
//  arr.forEach( (el , index , array) => {
//     console.log(el , index );
//     console.log(array);

//  })
// let prints = function(el){
//     console.log(el , index);
// }
// arr.forEach(prints);


// let arr = [
//    {
//       name: "Kunal",
//       marks: 98,
//    }
//    , {
//       name: "Swapnil",
//       marks: 97,
//    }, {
//       name: "Athrava",
//       marks: 99,
//    }]

//    arr.forEach((student, index , array)=> {
//       console.log(student.marks);

//    })


// ! Map() Method 
// ? let newArr = arr.map(some fnx defination or name);

// let num = [1, 2, 3, 4];

// let double = num.map(function (el){
//    return el * 2;
// })

// console.log(double);


//  let student = [
//    {
//       name: "Kunal",
//       marks: 98,
//    }
//    , {
//       name: "Swapnil",
//       marks: 97,
//    }, {
//       name: "Athrava",
//       marks: 99,
//    }]

//    let gpa = student.map((el)=>{
//       return el.marks / 10;
//    })

//    console.log(gpa);

// const numbers = [2, 4, 6, 8];

// let num = numbers.map((el)=>{
//    return el + 5;
// })

// console.log(num);

// ! Filter Method :

// let nums = [2 , 4 , 1 , 5 , 6 , 2 ,7 , 8  , 9];

// let even = nums.filter((num)=>{
//    return num % 2 == 0
// })

//! find  method :
// const students = [
//     { name: "Amit", marks: 45 },
//     { name: "Kunal", marks: 92 },
//     { name: "Riya", marks: 55 },
//     { name: "Neha", marks: 81 }
// ];
// const topper = students.find((el) => {
//     return el.marks > 80;
// });

// console.log(topper);

// const firstMatch = students.find(el => el.marks > 80);
// const allMatches = students.filter(el => el.marks > 80);

// console.log(firstMatch);
// // { name: "Kunal", marks: 92 }

// console.log(allMatches);
// [{ name: "Kunal", marks: 92 }, { name: "Neha", marks: 81 }]

// * What the differnece the find stop when the first ans satisfy it condition 

// const lastMatch = students.find((el)=> el.marks < 50);

// console.log(lastMatch);

// ! Every Method : 

// ? Returns true if every element of array gives true for some function . Else return false. 

// let arr = [2, 4, 6];

// arr.every((el)=>{
//     console.log(el % 2 == 0);

// })
// let arr2 = [2, 4, 6, 1, 3];

// arr2.every((el)=>{
//    console.log(el % 2 != 0);

// })


// ! Reduce Method : 
// ? Reduce the array to a single value 

// const students = [
//     { name: "Amit", marks: 45 },
//     { name: "Kunal", marks: 92 },
//     { name: "Riya", marks: 55 },
//     { name: "Neha", marks: 81 }
// ];


// let totalMarks = students.reduce((acc,curr)=>{
//    return acc + curr.marks;
// },0)
// console.log(totalMarks);

//? Maximum number of the array 

// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2, 12];

// let max= -1;

// for(let i = 0; i < arr.length; i++){
//    if(max < arr[i]){
//       max = arr[i];
//    }
// }
// console.log(max);

// let ans = arr.reduce((max ,curr)=>{
//      if(max < curr){
//       max = curr;
//      }
//      return max;
// })
// console.log(ans);


// * Practice Question 

// let nums = [10, 20, 30, 40];

// let mul10 = nums.every((el)=>{
//    return el % 10 == 0
// })
// console.log(mul10);


//  * PQ 2 minimum num
// function getMini(nums) {
//    let min = nums.reduce((acc, curr) => {
//       // if (acc > curr) {
//       //    return acc = curr;
//       // }
//       if(acc < curr) {
//          return acc;
//       }else{
//          return curr
//       }

//    });
//    return min;
// }


// let nums = [10, 20, 30, 40, 5];


// console.log(getMini(nums));


// ! Some method : 
// ? Atleast one should be correct 

// const students = [
//     { name: "Amit", marks: 45 },
//     { name: "Kunal", marks: 92 },
//     { name: "Riya", marks: 55 },
//     { name: "Neha", marks: 81 }
// ];

// const topper = students.some((el)=>{
//    return el.marks > 90;
// })

// console.log(topper);



// ! Default parameter :
// ? Giving a default value to the arguments.

// function sum(a , b =3 ){
//    return a + b;
// }
// console.log(sum(1 , 9));
// console.log(sum(4));

// ? user Created 
// function createUser(name = "Guest", role = "Student"){
//    return "Name: "+ name +", "+"Role: "+role;
// }

// console.log(createUser("Kunal", "Developer"));
// console.log(createUser());
// console.log(createUser("Rahul"));


// ! Spread : 
// ? Expands an iterable into multiple values.


// const java = ["Variables", "Loops", "Functions"];
// const js = ["Arrays", "Objects"];

// const lang = [...java,...js]
// console.log(lang);

// const updatedTopics = ["DOM",...java,...js,"React"];
// console.log(updatedTopics);

// const student = {
//     name: "Amit",
//     age: 20,
//     course: "Computer Engineering"
// };

// const extraInfo = {
//     age: 21,
//     city: "Mumbai"
// };
// // const profile = {...extraInfo,...student};
// const profile = {...student,...extraInfo};

// console.log(profile);


// ! Spread n Array Literals :

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];


// let chars = [..."hello"];

// console.log(chars);

// let odd = [1, 3, 5, 7, 9];
// let even =[2, 4, 6, 8,10];

// let nums = [...odd , ...even];
// console.log(nums);


// ! Spread in Object literals 

// const data = {
//    email: "ironman@gmail.com",
//    password: "abcd",
// };

// const dataCopy = { ...data, id: 123, country: "India" };
// console.log(dataCopy);

// let arr = [1, 2, 3, 4, 5];
// let obj1 = {...arr};

// console.log(obj1); // index = key and element  = value  0 : 1 , 1 : 2 ....


// ! rest 
// ? Allows a Function to take an indefinite number of arguments and bundle them in an array .

// function sum(...args){
   // *arguments
//    for(let i = 0  ; i < args.length;i++){
//       console.log("you gave us: ",args[i]);
//    }
// }

// sum(1, 2, 3, 4);

// function min(a , b,c, d){
//    console.log(arguments);
//    console.log(arguments.length);
//    let mini = arguments.push(1);
   // console.log(mini);  // *error always becs we can not use method of array in cottection we use it on array only

   
// }

// min(1 ,2, 3, 4, 5);

// function sum(){
//    arguments.reduce((sum , el)=>{
//       return sum + el;  // * we can not use arguments 
//    })
// }

// ? for sum 
// function sum(...args){
//  return  args.reduce((sum , el)=>
//        sum + el
//    );
// }

// ? for min and msg 
// function min(msg , ...args){
//    console.log(msg);
   
//  return  args.reduce((min , el)=> {
//    if(min > el){
//     return  el;
//    }else {
//       return min;
//    }
//  }   
//    );
// }

// console.log(sum(1, 2, 3));
// console.log(min("hello",1, 2, 3));


// const frontend = ["HTML", "CSS"];
// const backend = ["Node.js", "Express"];

// const fullStack = [...frontend,"React",...backend];
// console.log(fullStack);

// function multiplyAll(...num){
//    return num.reduce((total , num) => {
//        return total * num;
//    })
// }

// console.log(multiplyAll(2, 3));       // 6
// console.log(multiplyAll(2, 3, 4));    // 24
// console.log(multiplyAll(2, 3, 4, 5)); // 120

// ! Destructuring : 

// ? Storing values of array into multiple variables 

// let names = ["tony", "bruce", "peter", "steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secRunnerUp = names[2]; //? it  is two big to write 

// let [winner , runnerup , ...others] = names;

// console.log([winner, runnerup]);
// console.log(others);

// const student = {
//    name:"kunal",
//    age:14,
//    class:9,
//    subjects:["hindi","english","math","science"],
//    username: "karan@123",
//    password: 1231,
//    city:"pune",
// }

// let {username: user  , password:secret,city: place ="Mumbai"} = student;

// console.log({user, secret ,place });



// const languages = ["Java", "JavaScript", "Python", "C++"];

// const [firstLanguage , secondLanguage , ...otherLanguages]= languages;

// console.log(firstLanguage);
// console.log(secondLanguage);
// console.log(otherLanguages);
 


// const developer = {
//     name: "Kunal",
//     role: "Software Engineer",
//     city: "Mumbai"
// };

// const {name : developerName, role , country = "India"} = developer;

// console.log(developerName);
// console.log(role);
// console.log(country);


// function greet(name = "Guest") {
//     return `Hello ${name}`;
// }

// console.log(greet());//? hello guest 
// console.log(greet(undefined)); //? hello guest 
// console.log(greet(null));  //? hellp null



// function sumAll(...num){
//      return num.reduce((total, num)=>{
//      return  total + num;
//      },0)
// }
// console.log(sumAll(1, 2, 3)); // 6
// console.log(sumAll(5, 10));   // 15
// console.log(sumAll());        // 0

// const skills = ["HTML", "CSS", "JavaScript", "React"];

// const [first, ...remaining] = skills;

// console.log(first);
// console.log(remaining);

// const user = {
//     name: "Riya",
//     role: "Developer"
// };

// const {
//     name: username,
//     country = "India",
//     ...details
// } = user;

// console.log(username);
// console.log(country);
// console.log(details);


// TODO Revision Question 

// ? Q1 


// const numbers = [2, 3, 4, 5];

// const squared = numbers.map((n)=>{
//    return n * n;
   
// })
// console.log(squared);

// const sum = squared.reduce((acc , curr)=>{
//     return acc + curr;
// })
// console.log(sum);

// const avg = sum / squared.length;
// console.log(avg);


// ? Q2 

// const numbers = [10, 20, 30, 40, 50];

// const updatedNumbers = numbers.map((curr)=>{
//    return curr + 5;
// });
// console.log(updatedNumbers);


// ? Q3 

// const words = ["javascript", "react", "node.js", "python"];

// const uppercaseWords = words.map((curr)=>{
//   return curr.toUpperCase();
// })
// console.log(uppercaseWords);


// ? Q4 

// function doubleAndReturnArgs(arr, ...args){
//     let double =  args.map((el)=>{
//     return el * 2;
//    })
//    let combineArr = [...arr,...double];
//    return combineArr;
// }
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 5));
// console.log(doubleAndReturnArgs([10, 20], 1, 2, 3));


// ? Q5 

// function mergeObjects (obj1 , obj2){
//     const combineData = {...obj1,...obj2};
//     return combineData;
// }
// const obj1 = {
//     name: "Kunal",
//     age: 21
// };

// const obj2 = {
//    age:22,
//     city: "Mumbai",
//     role: "Developer"
// };
// console.log(mergeObjects(obj1, obj2));