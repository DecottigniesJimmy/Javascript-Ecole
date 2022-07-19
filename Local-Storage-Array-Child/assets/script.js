function addItem(){
let names = [];
names[0] = document.getElementById("box1").value;

localStorage.setItem("names", JSON.stringify(names));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(names)
}
