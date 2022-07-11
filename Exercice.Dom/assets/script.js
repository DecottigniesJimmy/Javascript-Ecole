let valeur = 0

function afficher1() {
    valeur = document.getElementById("input").value;
    valeur = valeur ** 2;
    document.getElementById("reponse").innerHTML = valeur;
    console.log(`Le resultat est de ${valeur} !` );
}

// méthode Exponentiation (** pour mettre au carré renvoie le meme resultat que Math.pow)