// let student = "Kunal";
// let student1 = "athrava";
// let student2 = "Swapnil";
// let student3 = "yash";

// let students = ["Kunal","athrava","Swapnil","Yash"];
// console.log(students);


// let nums = [2,4,6,8]; // index = 0 1 2 3 

// console.log(typeof nums);
// console.log(nums.indexOf(8));

// let fruits = ["mango","apple","litchi"];

// fruits[0] = "banana";
// console.log(fruits);

// ? Array Methods 

// push = Add to end 
// pop = delete from end & returns it 
// Unshift = Add to start 
// Shift = add to start 

// let cars = ["audi","bmw","xuv","maruti"];
// cars.push("bentley");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.unshift("bentley");
// console.log(cars);
// cars.shift();
// console.log(cars);


// let months = ['january','july','march','august'];

// months.shift();
// months.shift();
// months.unshift('june');
// months.unshift('july');

// console.log(months);

//? Array Methods 

// * indexOf : return index of something 



// let primary = ["red","yellow","blue"];
// 
// console.log(primary.indexOf("Yellow"));

//? Array Method --- Concatenate 

// let secondary = ["orange","green","violet"];

// console.log(primary.concat(secondary));


// console.log(primary.reverse());



// * Slice : Copices a protion of an Array.

// let color = primary.concat(secondary);

// console.log(color.slice(-2));


// ?Splice : removes /replace /add elements in place 

// console.log(color.splice(4));
// console.log(color);

// console.log(color.splice(0,1));
// console.log(color);

// console.log(color.splice(0,1,"black","grey"));

// console.log(color);


// Q1 : 

// let month = ["january","july","march","august"];

//  month.splice(0,1);
//  month.splice(1,0,"june");

//  console.log(month);
 

// Q2: 

// let language =["C","C++","Html","JavaScript","Python","Java","C#","SQL"];

// console.log(language.indexOf("JavaScript"));



//* Constant Arrays : in that arr name can not use
//* but we can change element inside it.

// const arr =[1,2,3,4];
// arr.push(5)
// console.log(arr);
// arr.pop();
// console.log(arr);


//* nested array: 

// let nums = [[2,4],[3,6],[4,8]];

// console.log(nums[0][1]);


//* Q3 : tic-tac-toe game 

// let tic_tac_toe = [["X","null","O"],["null","X","null"],["O","null","X"]];

// tic_tac_toe[0][1] = "O";

// console.log(tic_tac_toe);



// * JS part 3 Practice set : 

// Q1 : 
// for exmaple : Array[7,9,0,-2]; and n = 3;
// print[7,9,0]

// let arr = [7,9,0,-2];

// let ans = arr.slice(3);

// console.log(ans);


// let str =  prompt("Please enter a string");
// if(str.length == 0){
//     console.log("Str");
    
// }else{
//     console.log("arr");
    
// }