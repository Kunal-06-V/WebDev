
// ! DOM Events 
// ? Events are signal that something has occurred.(user inputs/actions).

// ? onclick : When an element is clicked.
// ? onmousewnter : When mouse enters an element.

// let btn = document.querySelector("button");
// console.log(btn);

// btn.onclick  = function (){
//     console.log("button was clicked");
//     alert("button was clicked");
    
// }

// function sayHello(){
//     alert("Hello");
// }
// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     };
//     console.log(btn);
    
// }

// function sayHello(){
//     alert("Hello");
// }
// ? the event work on a single property if we give them multiply it doess not
// ? work so we use event listener 

// ! Event listener :
// ? addEventListener 

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     // btn.onclick = sayHello; // it only give apna college so 
//     // btn.onclick = sayName;  // use event listener 


//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);

// }

// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("Apna College");
// }
// ? practice ques
// ? Q1 
// let btn = document.querySelector("button");
// function sayHello(){
//     console.log("Hello JavaScript");
// }
// btn.addEventListener("click",sayHello);

// ? Q2  
// let btn = document.querySelectorAll("button");
//   btn.forEach(function(btn){
//      btn.addEventListener("click",function(){
//         console.log(btn.innerText+" clicked");
        
//      })
//   })
 
// ? A rondom color display page 

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (){
// let h3 = document.querySelector("h3");
//   let randomColor =  getRandomColor();
//   h3.innerText  = randomColor;

//   console.log("color updated");

//   let div = document.querySelector("div");
   
//   div.style.backgroundColor = randomColor;
// })


// function getRandomColor() {
//     let red = Math.floor(Math.random()* 255);
//     let green = Math.floor(Math.random()* 255);
//     let blue = Math.floor(Math.random()* 255);
    
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// ? Event listener for Element ]

// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("Para was Clicked");
    
// })

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter",function(){
//     console.log("inside box");
    
// })

// ! Event Listener "This":
// ? When 'this' is used in a callback of event of something,it refers to that something.

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this);
//     this.style.background = "blue"; 
// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

// btn.addEventListener("click", function() {
//     // console.log(this);
//     console.dir(this.innerText);
//     this.style.background = "blue"; 
// });

// p.addEventListener("click", function() {
//     console.dir(this.innerText);
//     this.style.background = "blue"; 
// });

// h1.addEventListener("click", function() {
//     console.dir(this.innerText);
//     this.style.background = "blue"; 
// });

// h3.addEventListener("click", function() {
//     console.dir(this.innerText);
//     this.style.background = "blue"; 
// })

// ! Keyborad Events :

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
    
//     console.log("button clicked" );
    
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){
    // console.log(event);
    // console.log("Key = "+event.key);
    // console.log("code = "+event.code);
    // console.log("key was pressed");
    // * Character moving up ,down , left , right
//     console.log("code = "+event.code);
//     if(event.code == "KeyW") {
//         console.log("Character moves forward");
//     }else
//      if(event.code == "KeyS") {
//         console.log("Character moves backward");
//     }else
//      if(event.code == "KeyA") {
//         console.log("Character moves Left");
//     }else
//      if(event.code == "KeyD") {
//         console.log("Character moves right");
//     }
// })

// inp.addEventListener("keyup",function(){
//     console.log("key was relesed ");
    
// })


// ? practice 

// document.addEventListener("keydown", function(event) {
//     console.log("Key Pressed:", event.key);
//     console.log("Auto repeat:", event.repeat);

// });

// document.addEventListener("keyup", function(event) {
//     console.log("Key Released:", event.key);
//     console.log("Auto repeat:", event.repeat);

// });

// ! Form Event : 

// let form = document.querySelector("form");

// let input = document.querySelector("input");
// form.addEventListener("submit",function(event){

//     event.preventDefault();
//     // alert("form submitted");
//     console.log("from submitted Successfuly ");

// })
// input.addEventListener("input",function(){
//     console.log("User is typing ");
// })
// input.addEventListener("change",function(){
//     console.log("Input value changed");
// })
// ! Extracting Form Data : 

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    
    console.dir(form);
    
//     let user = document.querySelector("#user");
//     //    console.log(user);
//     // console.dir(inp.innerText); // it will give empty in form 
//        console.log(user.value);
//     let pass = document.querySelector("#pass");
//         //  console.log(pass);
//          console.log(pass.value);

//   alert(`Hi, ${user.value} your password is set to ${pass.value}`);
    let user = this.elements[0];  // this or form are same to access 
    let pass = form.elements[1]; // element in it 
       console.log(user.value);
       console.log(pass.value);
    let email = form.elements[2];
    console.log(email.value);
       

})

// ! More Event : 

