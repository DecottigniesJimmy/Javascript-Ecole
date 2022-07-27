let text = document.querySelector("#text"); // on recépure le text dans le P portant l'id text
let r1 = /engagez/i;                //Option : i est une option Regex permettant d'ignorer la casse i veux dire Case insensitive, 
                                            //cela permet de faire comprendre la valeur "Pierre" avec ou sans majuscule, exemples :
let r2 = /engagez/;              
let res1 = text.textContent.search(r1);      //retourner la position de la 1ere occurence trouver dans une chaine de caractère
let res2 = text.textContent.search(r2);      //retourner la position de la 1ere occurence trouver dans une chaine de caractère dans ca globalité on 
                                            //l'enleve les option I et G pour trouver le terme engagez avec la casse

let result= document.getElementById("reg"); // on recupere le P avec l'id #Reg vide pour afficher le retour de notre Regex ici
result.innerHTML = `Le résultat du regex search() 1 ce trouve : ${res1} <br/> Le résultat du regex search() 2 ce trouve : ${res2}` // on affiche le resultat