// let student = {
//     name: "Kunal",
//     age: 21,
//     marks : 94.5,
//     city: "Delhi"

// };

// const post = {
//     username : "Kunal-06",
//     content : "This is my #firstPost",
//     likes : 20000,
//     repost : 5 ,
//     tags: ["kunal@06", "@tri"]
// };

// const obj = {
//     1: "a",
//     2:"b",
//     true : "c",
//     null: "d",
//     undefined : "e"
// }

// ? Object of Object {nested object} == 

// const classInfo = {
//     kunal : {
//         grade:"A+",
//         city:"Mumbai"
//     },
//     tri:{
//         grade:"A",
//         city:"russia"
//     },
//     varal : {
//         grade:"O",
//         city:"Nighoj"
//     }
// };

// //? Array of Objects == 

// const classInfo = [
//      {
//         name :"Kunal",
//         grade:"A+",
//         city:"Mumbai"
//     },
//     {   
//         name :"Tri",
//         grade:"A",
//         city:"russia"
//     },
//     {    
//         name :"Varal",
//         grade:"O",
//         city:"Nighoj"
//     }
// ];

// ? Math Object == 

// Math.PI == 3.14
// Math.E == 2.71

// Math.abs = -12 => 12 , 123 => 123   gives absolute value 
// Math.pow = (2, 5) => 32 , (2, 2) => 4 gives a**b 
// Math.floor = (5.43) => 5, (5.67) => 5  round of less number 
// Math.ceil = (5.6) => 6, (5.2) => 6 round of but bigger number 
// Math.Random = 0.1341241224 => gives random numbers between 0 and 1


// ? Guessing Game :

// const max = prompt("Enter the Max number :");
// // console.log(max);

// const random = Math.floor(Math.random() * max)+ 10;
// // console.log(random);

// let guess = prompt("guess the number");

// while(true) {
//     if(guess == "quit") {
//         console.log("user quit");
//        break;   
// }
// if(guess == random) {
//     console.log("You are right! congrats!!");
//     break;
// }else if(guess < random){
//   guess =  prompt("hint :Your guess was small try again");
// }else{
//   guess =   prompt("hint :Your guess was large. please try Again");
// }

// }


const max = prompt("Enter the Max number :");
// console.log(max);

const random = Math.floor(Math.random() * 6)+ 1;
// console.log(random);

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
       break;   
}
if(guess == random) {
    console.log("You are right! congrats!!");
    break;
}else if(guess < random){
  guess =  prompt("hint :Your guess was small try again");
}else{
  guess =   prompt("hint :Your guess was large. please try Again");
}

}
