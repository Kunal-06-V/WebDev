// ! DOM (Document Object Model) :
// * The DOM represents a document with a logical tree.
// * it allows us too manipulate/change webpage content(HTMl elements).

// TODO: Selecting Elements 

// ? 1. getElementById  : return One Element(or null)
// Returns the element as an object or null(if not found).

// ? 2. getElementByClassName :returns HTML Collection 
// Returns the elements as an HTML Collection or empty collection(if not found)

// let smallImges = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImges.length;i++){
//   smallImges[i].src =  "assets/spiderman_img.png"
//     console.dir(`Value of img  no. ${i} is changed`);
// }

// ? 3. getElementByTagName : returns HTML Collection 
// Returns the Element as an HTML Collection or Empty collection (if not found)



// * Practice Task 

// let allElements = document.getElementsByClassName("info");
// console.log(allElements);

// console.log(allElements[0].textContent);
// console.log(allElements[1].textContent);
// console.log(allElements.length);


// let head = document.getElementById("heading");
// console.log(head.innerHTML);

// let para = document.getElementsByTagName("p");
// console.log(para.length);

// let info = document.getElementsByClassName("info");
// console.log(info[0].innerHTML);
// console.log(info[1].innerText);

// let span = document.getElementsByTagName("span");

// console.log(span.length);


// ? 4. Query Selectors : it only select one first element (if many same id , class name are same )
// Allows us to use any CSS selector.

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a")); //* it just give one element

// ? 5. Query Selectors All: it gives all element in it 

// console.dir(document.querySelectorAll("div a"));

//  * Practice task Query 

// let head = document.querySelector("#heading");
// console.log(head.innerHTML);

// let para = document.querySelector(".info");
// console.log(para.textContent);

// let para1 = document.querySelectorAll(".info");
// console.log(para1.length);
// for(let i = 0; i <para1.length;i++){
//     console.log(para1[i].textContent);
// }

// let span = document.querySelector("span");
// console.log(span.textContent);

// ? Using properties And Methods 

// innerText : Shows the visible text contained in a node //* Returns Rendered text or normal 

// textContent : Shows all the full text. // * return text with hiddin text , whiteSpaces 

// innerHTML : Shows the full markup //* Html file text all 



// let title = document.querySelector("#title");
// let description = document.querySelector("#description");

// console.log(title.innerText);
// console.log(title.textContent);
// console.log(description.innerHTML);
// console.log(description.innerText);
// console.log(description.textContent);

// title.innerText = "Welcome to DOM Manipulation";

// description.innerHTML = "I am learning JavaScript DOM";

// ? 6. Manipulating Attributes 

//* getAttribute() → reads and returns an attribute value.
//* setAttribute() → creates or updates an attribute; it returns undefined.
//* removeAttribute() → removes an attribute.

// let img = document.querySelector("#myImage");
// let link = document.querySelector("#myLink");
// let input = document.querySelector("#username");

// console.log(img.getAttribute("src"));
// console.log(img.getAttribute("alt"));
// console.log(link.getAttribute("href"));
// console.log(input.getAttribute("value"));
// console.log(img);


// img.setAttribute('src','new.jpg');
// img.setAttribute('alt','New Image');

// link.setAttribute('href','https://www.youtube.com');
// input.setAttribute("type","password");


// console.log(img.getAttribute("src"));
// console.log(img.getAttribute("alt"));
// console.log(link.getAttribute("href"));
// console.log(input.getAttribute("type"));

// ? 7. Manipulating Style //* Only in inline Css 

// let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length;i++){
//     links[i].style.color = "yellow";
// } //* usig for loop but better way are for of 

// for(link of links){
//     link.style.color = "green";
// }
// let heading = document.querySelector("#heading");
// let para = document.querySelector("#para");
// let button = document.querySelector("#btn");

// console.log(heading.style.color);
// console.log(para.style.backgroundColor);


// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";

// para.style.fontSize = "25px";
// para.style.color ="blue";
// para.style.border="2px solid black";
// button.style.backgroundColor = "green";


// ?  Manipulating Style Using classList obj.classList  

// classList.add() to add new classes
// classList.remove() to remove classes 
// classList.contains() to check if class exists
// classList.toggle() to toggle between add & remove 
 
//* practice task 

// let box = document.querySelector("#box");

// console.log(box.classList);
// console.log(box.classList.contains("active"));
// console.log(box.classList.contains("hidden"));

// box.classList.remove("active");
// box.classList.add("highlight");

// console.log(box.className);

// console.log(box.classList.add("dark"));
// console.log(box.classList.remove("card"));
// console.log(box.classList.toggle("hidden"));
// console.log(box.classList.contains("highlight"));


// ? 8. Navigation: 
// parentElement
// children
// previousElementSibling/nextElementSibling

let parent = document.querySelector("#parent");
let first = document.querySelector(".first");

console.log(parent.children.length);

console.log(parent.firstElementChild.textContent);

console.log(parent.lastElementChild.textContent);

console.log(first.parentElement.id);

console.log(first.nextElementSibling.textContent);



