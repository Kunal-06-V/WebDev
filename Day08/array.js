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



function getMini(nums) {
   let min = nums.reduce((acc, curr) => {
      // if (acc > curr) {
      //    return acc = curr;
      // }
      if(acc < curr) {
         return acc;
      }else{
         return curr
      }

   });
   return min;
}


let nums = [10, 20, 30, 40, 5];


console.log(getMini(nums));
