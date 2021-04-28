
//This is a comment in JavaScript
/* sdgsdffdfdfdfdsf
sfdfsfdfdsfdsf
sfdfsdfdsfsf */

let d = new Date();
document.getElementById("mydate").innerHTML = d;

document.body.style.backgroundColor = "blue";
document.body.style.color = "white";

let p = document.createElement("p"); //create p tag
let t = document.createTextNode("This is a paragraph");

document.body.appendChild(p);   //p alone is empty
p.appendChild(t);

document.write("This is using the document.write method"); //this is to write text

//body is the parent of p element
//p is the parent of textNode

