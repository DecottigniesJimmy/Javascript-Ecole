function myfunction() {
    let color = document.querySelectorAll("p") // selectionner tout les paragraphes
    for (let i=0; i < color.length; i++) {    // création boucle pour selectionner tout les paragraphes
        color[i].style.backgroundColor = "white"; // on demande de changer la couleur des para
    }
}

myfunction(); // affichage de la fonction

$("#paroles .red").removeClass("red");  // methode JQUERY beaucoup plus rapide

$("#paroles .refrain").css({"font-style": "italic"}) // methode Jquery selectionner refrain et mettre en italique

$(".titre").css('color', '#6495ED'); // changer le titre de couleur bleu plus clair

$( "#trimmed" ).html( "$.trim()'ed: '" + $.trim(str) + "'" );