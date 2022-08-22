// Variable animation goutte
const body = document.body;
// Fin variable animation goutte

// DEBUT GOUTTE D'EAU
setInterval(rainFall, 10); // c'est lui qui va faire partir la fonction setInterval("lafonction", "timer 10 millieme scd")

function rainFall() {
    const waterDrop = document.createElement("i");  // On crée l'élément I pour l'icone avec le DOM
    waterDrop.classList.add("fa-solid")  // On ajoute la class fa-solid ( la goutte )
    waterDrop.classList.add("fa-droplet"); // puis on ajoute la class fa-tint ( la 2eme appellation de  class droplet Font awesome )
    waterDrop.style.fontSize =  Math.random() * 7 + "px";  //stylisé la goutte avec math random de 0 a 1 fois 7px ( taille aléatoire)
    waterDrop.style.animationDuration = Math.random() * 2 + "s"; //durée de l'animation math random fois 2 + secondes
    waterDrop.opacity = Math.random() + 0.3; // regler l'opacité des gouttes entre 0.3 a 1 et non 0 a 1
    waterDrop.style.right = Math.random() * window.innerWidth + "px"; // répartir les gouttes d'eau sur l'ecran le resultat de la largeur fois la taille de la window en px
    body.appendChild(waterDrop); // tu crée un enfant a la balise Body (waterDrop)

    
    setTimeout(() => {
        waterDrop.remove(); // tuer / supprimer chaque élément crée


    }, 6000)  // au bout de 6 secondes
}
//FIN GOUTTE D'EAU