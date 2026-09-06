
// function hello(){
//     console.log("hello");
    
// }
// hello();

// function print(){
//     for(let i = 0; i< 5;i++){
//       console.log(i);
      
//     }
// }
// print();

// function printPoem() {
//     console.log("Twinkle twinkle, Litle Star  how i wonder what u are! Up above the sky ");
    
// }
// printPoem();

// function randomNums() {
//     console.log(Math.floor(Math.random()*6)+1);
    
// }
// randomNums();

// ? Argument 

// function printInfo(name, age){
//     console.log(name);
//     console.log(age);

// };
// printInfo("Kunal", 21);

// function sum(a ,b) {
//     console.log(a + b);
    
// }
// sum(3 ,3);
// sum(4 ,3);
// sum(2 ,6);


// ? Average of Three Numbers 

// function averageNums(a ,b, c) {
//     console.log(a + b + c) / 3;
// };

// averageNums(2, 5, 3);
// averageNums(6, 3, 5);
// averageNums(7, 3, 8);


//? Multiplication Table 

// function table(num) {
//     for(let i = 1; i<=num;i++){
//        console.log(`${5 } * ${i} = ${5 * i}`);
//     }
// }
// table(10);
// function table(num) {
//     for(let i = num; i<=num *10;i+= num){
//        console.log(i);
//     }
// }
// table( 2 );
// table( 7 );

//? Return KeyWord 

// function sum(a ,b) {
//     return a + b;
// }
// console.log(sum(sum(1 ,3 ),5));


// function isAdult(age) {
//     if(age > 18){
//         return "adult";
//     }else{
//         return "not Adult";
//     }
// }
// console.log(isAdult(32));
// console.log(isAdult(18));
// console.log(isAdult(2));

// function sumNums(n) {
//     let sum = 0
//      for(let i = 0; i <= n;i++){
//       sum += i;
//      }
//      return sum;
// }
// console.log(sumNums(6));


// Q6 : 

// let str = ["hi","my","name","is","K"];

// function concat(str) {
//      let result;
//    for(let i = 0 ; i< str.length;i++){
//     result += str[i];
//    }
//   return result;
// }
// console.log(concat(str));

// function outerFun() {
//   let x = 5;
//   let y = 6;
//   function innerFunc () {
//     let a = 10;
//     console.log(x);
//     console.log(y);
    
//   }
//   console.log(a);
//   innerFunc();
//   outerFun();
  
// }


// Q7  Practice 

// let greet = "hello";

// function changeGreet(){
//   let greet = "namaste";
//   console.log(greet);
//   function innerGreet(){
//     console.log(greet);   
//   }
// }
// console.log(greet);
// changeGreet();

// ? Function Expression 

// let sum = function(a , b){
//   return a + b;
// }

// console.log(sum(2 ,4));


//? HIgh Order Function 

// let greet = function(){
//   console.log("hello");
// }

// function highOrder(func , n){
//   for(let i = 0; i <= n-1; i++){
//     func();
//   }
// }
// // highOrder(greet , 5);
// highOrder(function(){console.log("namsate");
// } , 5000);


//? For Return function 

// function oddorEvenFactory(request){
//    if(request == "odd"){
//     let odd = function(n){
//       console.log(!(n % 2 == 0));
//     }
//     return odd;
//    }else if(request =="even"){
//     let  even = function(n){
//       console.log(n%  2 == 0);
//     }
//     return even;
//    }else{
//     console.log("Wrong request");
    
//    }
// }
// let request = "odd";


// ? Method 

//?  long hand 
let  calculator = {
  num : 55,
  add : function(a ,b){
    return a + b;
  },
  sub : function(a ,b){
    return a - b;
  },
  mul : function(a ,b){
    return a * b;
  },
  div : function(a ,b){
    return a / b;
  }
};

//? short hand 

// const calculator = {
  
//   add (a ,b){
//     return a + b;
//   },
//   sub (a ,b){
//     return a - b;
//   },
//   mul (a ,b){
//     return a * b;
//   },
//   div (a ,b){
//     return a / b;
//   }
// };

console.log(calculator(5 ,6 ));
