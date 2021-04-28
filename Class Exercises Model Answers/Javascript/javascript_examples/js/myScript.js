//This is a comment in the SCRIPT
/* 
This is a comment in the SCRIPT
*/

let d = new Date();
document.getElementById("mydate").innerHTML = d;

document.body.style.backgroundColor = "blue";
document.body.style.color = "white";

let p = document.createElement("p");       //Create a p tag
let t = document.createTextNode("This is a paragraph");


document.body.appendChild(p);    //p is empty
p.appendChild(t);

document.write("This is using the document write method");


//body is the parent of p element
//p is the parent of textNode
