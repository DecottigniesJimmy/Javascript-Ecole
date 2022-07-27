let text = document.querySelector("#text"); // on recépure le text dans le P portant l'id text
let r1 = /engagez/i;                //Option : i est une option Regex permettant d'ignorer la casse i veux dire Case insensitive, 
                                            //cela permet de faire comprendre la valeur "Pierre" avec ou sans majuscule, exemples :
let r2 = /engagez/ig;               //Option : g qui permet de trouver le ou les charactères de manière global dans le document
                                            // on utilise les 2 options
let res1 = text.textContent.match(r1);      // on utilise la methode Match pour comparé avec le text l'élement de notre variable sans la casse
let res2 = text.textContent.match(r2);      // on utilise la methode Match pour comparé avec le text dans sa globalité

let result= document.getElementById("reg"); // on recupere le P avec l'id #Reg vide pour afficher le retour de notre Regex ici
result.innerHTML = `Le résultat du match() sur regex 1 : ${res1} <br/> Le résultat du match() sur regex 2 : ${res2}` // on affiche le resultat

