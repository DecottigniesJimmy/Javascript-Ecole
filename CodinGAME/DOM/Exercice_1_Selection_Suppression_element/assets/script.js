document.querySelector("h1").innerHTML = "Rick Astley - Never Gonna Give You Up";

const couplets = document.getElementsByClassName("couplet");

for (let i=0; i < couplets.length; i++) {

// faire le if ...



// suppression du texte

couplets[i].removeChild(couplets[i].firstChild);

// supression de la balise br

couplets[i].removeChild(couplets[i].firstElementChild);

};

const element = document.getElementById("erreur");
element.remove();

// ajouter un footer et un para dans le footer
function addfooter() {
let x = document.createElement("FOOTER"); // crée une balise footer 
x.setAttribute("id", "myFooter");         // attribuer un id avec le nom a la variable x (footer)
document.body.appendChild(x); // integrer l'élément au html

let y = document.createElement("P"); // crée une balise p
y.setAttribute("id", "myP");         // attribuer un id avec le nom de la variable y (myP)
document.body.appendChild(y);        // integrer l'élement au html
y.innerHTML = "© Copyright 2020 - Nom"; // modifier ou crée le contenu a l'interieur du para 
document.querySelector("#myFooter").appendChild(y); // lié le P dans le footer
}

addfooter(); // Appeler la fonction addfooter

// VERSION JQUERY FUNCTION ADDFOOTER : $("body").append('<footer> <p>© Copyright 2020 - Nom</p></footer>');

// EXERCICE NON TERMINE IL MANQUE 1 ennoncé sur le refrain

//<!-- Lien de l'exercice : https://www.codingame.com/playgrounds/53589/exercices-dom/1--selection-suppression-delement-->








