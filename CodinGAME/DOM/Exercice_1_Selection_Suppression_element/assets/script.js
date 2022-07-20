document.querySelector("h1").innerHTML = "Rick Astley - Never Gonna Give You Up";

const couplets = document.getElementsByClassName("couplet");

for (let i=0; i < couplets.length; i++) {

// faire le if ...



// suppression du texte

couplets[i].removeChild(couplets[i].firstChild);

// supression de la balise br

couplets[i].removeChild(couplets[i].firstElementChild);

};
// EXO 1 PART 3-------------------------------------------
const refrain = document.getElementsByClassName("couplet refrain");
for(let x = 0; x < refrain.length; x++){
    const refrainChildren = refrain[x].childNodes;
    const refrainNumberChildren = Math.round(refrainChildren.length / 2);
    
    for(let y = 0; y < refrainNumberChildren; y += 2){
    // let child = refrainChildren[i];
    
    for(let i = 0; i < 2; i++){
    refrain[x].removeChild(refrainChildren[y]);
    }
    }
    }
// -------------------------------------------------------
// EXO 1 PART 4 ------------------------------------------------
const element = document.getElementById("erreur");
element.remove();
// -------------------------------------------------------------

// EXO 1 PART 5 ------------------------------------------------------
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
// --------------------------------------------------------------------------

// VERSION JQUERY FUNCTION ADDFOOTER : $("body").append('<footer> <p>© Copyright 2020 - Nom</p></footer>');

// EXERCICE NON TERMINE IL MANQUE 1 ennoncé sur le refrain

//<!-- Lien de l'exercice : https://www.codingame.com/playgrounds/53589/exercices-dom/1--selection-suppression-delement-->








