// function permettant de recuperer les informations de l'input et de rechercher la valeur de l'input dans un texte
function afficher1() {
let chaine = document.getElementById("text").innerHTML;    // on recupere le P text dans le html
const searchStr = document.getElementById("input").value;    // on recupere la valeur de l'input 
let reg = new RegExp((searchStr), "g");                      // on utilise une methode Regex pour chercher la valeur de l'input dans la globalité("g") du text 
let res = chaine.match(/reg/g);                              // verifier que l'occurence match avec l'input


//----------------------------------------------------------------------------

// Indexation des occurences dans le <p>"id#Demo"
const indexes = [...chaine.matchAll(new RegExp(searchStr, 'gi'))].map(a => a.index);
document.getElementById("demo").innerHTML = `Les occurences "${searchStr}" se trouvent a l'index : ${indexes} `;
//-----------------------------------------------------------------------


// Animation bounce Animate.css-------------------------------------------------
let animation = document.getElementById("myString").innerHTML ="Chaîne traitée : " + 
chaine.replace(reg, `<span id=test style='display:inline-block; background-Color: yellow'>${searchStr}</span>`) + "<br>";
document.querySelectorAll('#test').forEach(e => e.classList.add('animate__animated', 'animate__bounce', 'animate__infinite'));
// ----------------------------------------------------------------------
}
