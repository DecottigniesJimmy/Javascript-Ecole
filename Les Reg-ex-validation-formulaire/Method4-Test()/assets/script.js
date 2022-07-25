let rec = document.querySelector("#text").textContent;  // on stock le contenue textuelle de notre P avec l'id text

let r1 = /ENGAGEZ/;
let r2 = /ENGAGEZ/i;

let res1 = r1.test(rec); //permet de recherche une séquence de caractères dans une chaine de caractère revoie true or false 
let res2 = r2.test(rec); //permet de recherche une séquence de caractères dans une chaine de caractère revoie true or false 

let resultat = document.getElementById("reg");
resultat.innerHTML = `resultat 1 : ${res1} <br/> resultat 2 : ${res2}`;

// return 1 False 2 True
