let rec = document.querySelector("#text").textContent;  // on stock le contenue textuelle de notre P avec l'id text

let r1 = /aient/;

let res1 = r1.exec(rec); // permet de rechercher une séquence de caractères dans une chaine de caractère renvoie le text trouver ou null si il ne trouve pas.

let resultat = document.getElementById("reg");
resultat.innerHTML = `resultat 1 : ${res1}`;

// return 1 False 2 True
