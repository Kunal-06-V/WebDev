// * " This" is keyword in js 


// const student = {
//     name : "Kunal",
//     age : 21,
//     eng : 98,
//     phy : 87,
//     math : 99,
//     getAvg() {
//         console.log(this);
        
//      let avg = (this.eng + this.phy + this.math) / 3;
//      console.log(`${this.name} got avg marks: ${avg}`);
     
//     }
// }
// function getAvg(){
//     console.log(this);
    
// }


// ! Try And Catch 

// The try statemnet allows you to define a block of code to be tested for errors while it is being executed 

// the catch statement allows you to define a block of code to be executed , if an error occurs in the try block 
// console.log("hello");
// console.log("hello");
// // let a  = 5; 
// try {
// console.log(a);
// }catch (err){
//     console.log("caught an error");
//     console.log(err);
    
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


// ? Miscellaneous Topics 

// Arrow Function 

// const sum = (a , b) => {
//     console.log(a + b);
    
// }

// sum(3 ,4);

// const cube = n => {
//     return n * n*n;
// }

// const hello = () => {
//     console.log("hello");
    
// }


// ? Implicit Return  => auto return 

// const mul =(a , b) =>  a * b;


// ? Set TimeOut fnx => it is a inbuilt fnx 

//* setTimeout(function,timeout)


// console.log("hi there!");
// setTimeout(() => {
//     console.log(" my house !");
    
// }, 4000);

// console.log("Welcome to");



// ? Set Interval  
// * setInterval (function , timeout)

// let id = setInterval(() => {
//     console.log("Hi there!");
    
// }, 2000);

// console.log(id);


// let id2= setInterval(() => {
//     console.log("Hello World");
    
// }, 3000);
// console.log(id2);

// ? arrow fnx               normal fnx
// ? lexical scope           scope 
// ? parent => call          this => calling object 
// ? scope 
// const student = {
//     name : "kunal",
//     marks: 98,
//     prop : this, // global scope => window 
//     getName: function(){
//         console.log(this); // scope is itself name 
//         return this.name; // this = student 
//     },
//     getMarks: () => {
//            console.log(this); // parnent scope as window of object 
//         return this.marks; // this = window same as parent 
//     },
//     getInfo1: function (){
//        setTimeout (()=>{    // it give student as object 
//         console.log(this);
//        },2000);
//     },
//     getInfo2: function (){
//        setTimeout (function(){ // it gives window as object 
//         console.log(this);
//        },2000);
//     },
// }

// const a = 5; // global scope 


// const num = (n) => {
//     return n *n 
// }
// console.log(num(5));


// function hello() {
//   let id = setInterval(() => {
//     console.log("hello World");
    
//   }, 2000);
//   setTimeout(() => {
//    clearInterval(id);
//     console.log("done ");
    
//   }, 10000);
// }

// hello();

// let num = (n) =>{
//    if (n % 2 == 0){
//     console.log("n is even");
//    }else{
//     console.log("n is odd")
//    }
// }
// num(6);