// Crée un tableau en JSS
function nouveautableau() {
    var table = document.createElement("table");
    table.innerHTML = "<tr> <td> 123456</td><td>789101112 </td> </tr> ";
    document.getElementById("y").appendChild(table);
    }
    //----------------------------------------------------------

var n = new Number,
estPrem = new Boolean(true);
function tester()
{
    // ajouter une image JSS
var img = document.createElement("img");
img.src = "test.gif";
//------------------------------------

n=Number(document.test.nbre.value);
estPrem=true;
let ok = "c'est un nombre premier";
let nook = "ceci n'est pas un nbre premier";

for(j=2;j<n;j++)
{
if(n%j==0)estPrem=false;
} 
document.test.rep.value=estPrem;
let html = document.getElementById("reponse").innerHTML
if (estPrem)
{
    document.getElementById("reponse").innerHTML = ok;
    document.getElementById("reponse").style.backgroundColor = "green"; // ajouter couleur de fond IF TRUE

    var div = document.getElementById("x"); // ajouter l'image JSS
    div.appendChild(img);                   // ajouter l'image JSS
} 

else
{
    document.getElementById("reponse").innerHTML = nook
    document.getElementById("reponse").style.backgroundColor = "red"; // ajouter couleur de fond IF FALSE
}
}

