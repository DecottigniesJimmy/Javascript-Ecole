// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("o");
// var count = (text.match(/o/g) || []).length;
// console.log(count);

// document.getElementById("demo").innerHTML = count;
function afficher1() {
const sourceStr = document.getElementById("text").innerHTML;
const searchStr = document.getElementById("input").value;
const indexes = [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map(a => a.index);

console.log(indexes); // [2, 25, 27, 33]
document.getElementById("demo").innerHTML = `Les occurences "${searchStr}" se trouvent a l'index : ${indexes} `;

}


