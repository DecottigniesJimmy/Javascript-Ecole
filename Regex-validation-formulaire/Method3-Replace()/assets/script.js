let text = document.querySelector("#text"); // on recépure le text dans le P portant l'id text
let r1 = /vous/;                
let r2 = /vous/g;               //Option : g qui permet de trouver le ou les charactères de manière global dans le document
                                            // on utilise les 2 options
let res1 = text.textContent.replace(r1, "moi");      // rechercher une expression et la remplacer par une autre
let res2 = text.textContent.replace(r2, "moi");      // rechercher une expression et la remplacer par une autre dans la globalité du text 
                                            //l'enleve les option I et G pour trouver le terme engagez avec la casse

let result= document.getElementById("reg"); // on recupere le P avec l'id #Reg vide pour afficher le retour de notre Regex ici
result.innerHTML = `Le résultat du replace() sur regex 1 : ${res1} <br/> Le résultat du replace() sur regex 2 : ${res2}` // on affiche le resultat