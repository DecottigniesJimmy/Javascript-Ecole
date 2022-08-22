// Variable ANIMATION SITE
const titreSpans = document.querySelectorAll(".title1, .title2"); // On récupere notre span
const btns = document.querySelectorAll(".btn-1"); // On récupere nos 2 boutons
const medias = document.querySelectorAll(".bulle"); // On récupere nos bulles
const l1 = document.querySelector(".l1"); // On récupere notre ligne 1
const l2 = document.querySelector(".l2"); // On récupere notre ligne 2
// FIN VARIABLE ANIMATION SITE

// DEBUT ANIMATION SITE
window.addEventListener('load', () => { // Une fois que le site a bien était chargé
    const TL = gsap.timeline({paused:true}) // crée une timeline avec la librairie greensock avec le parametre {en pause} (container a animation)

    TL
        .staggerFrom(titreSpans, 2, {y: -2000, opacity: 0, ease: "power2.out"}, 0.4) // Methode qui Permet d'animer des elements et quand on en a plusieurs d'animées les uns a la suite des autres (très pratique) ( Methode d'animation)
                                // On selectionne la constante titreSpans avec une durée de 2sec puis on ouvre des réglages pour les caractèristique de l'animation
                                // Les caractèristiques sont la position initiale, l'opacité, et un easing (la maniere dont l'animation va ce faire avec la puissance ex : power2) et .out pour que ca soit plus lent vers la fin
                                // on ajoute 0.3 pour qu'entre chaque animations il ce passe 0.3sec
                                // Pour resumer on a la duration (1), ce qu'on va animer {top-50%...}, le easing (ease: "power2.out" // .in lent au debut .out lent a la fin) et 0.3 la durée de chaque animation du Stagger
                                // c'est un Staggerfrom Ca va allez d'un endroit jusque la ou c'est stylisé en CSS
        .staggerFrom(btns, 2, {opacity: 0, ease: "power2.out"}, 0.3, "-=2.5") // "-=2 va lancé 2 seconde avant la 1ere animation dans la timeline pour qu'elle ce lance en meme temps"
        .from(l1, 2, {width: 0, ease: "power2.out"}, "-=2") // permet d'animer un element pas un avec un stagger ( plusieurs elements)
        .from(l2, 2, {width: 0, ease: "power2.out"}, "-=2")
        .staggerFrom(medias, 1, {x: 700, ease: "power2.out"}, 0.3, "-=2"); // ne pas oublier le ";" car c'est la derniere animation
    TL.play(); // On lance l'animation, on met une pause pour crée notre timeline et ensuite la jouer                    
})

// FIN ANIMATION SITE

