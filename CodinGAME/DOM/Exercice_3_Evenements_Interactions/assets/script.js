// EXERCICE 3 PART 1 
// Récupere la case "masquer les paroles"
const checkboxParoles = document.getElementById("masquer-paroles");

// Récupère le div contenant les paroles
const divParoles = document.getElementById("paroles"); //

// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (event.target.checked) { 
    $("#paroles").hide();
    $('#lab1').contents().last().replaceWith('Afficher les paroles');

    // la case vient d'être cochée
  } 
  else {
    $("#paroles").show();
    $('#lab1').contents().last().replaceWith('Masquer les paroles');
    // la case vient d'être décochée
  }
});


// ------------------------------------------------------------------------------------------------------
// EXERCICE 3 PART 2 
// Récupere la case "masquer les refrains"
const checkboxrefrains = document.getElementById("masquer-refrains");
const span1 = document.getElementsByClassName("contenu");
const span2 = document.getElementsByClassName("contenu").innerHTML = "[Refrain]";

// Attache une fonction à l'évènement "click" sur checkboxrefrains
checkboxrefrains.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxrefrains

  // event.target contient l'élément cliqué (ici checkboxrefrains dans notre cas)
  if (event.target.checked) { 
        // la case vient d'être cochée
      $('#lab2').contents().last().replaceWith('Afficher les refrains');
      $(".contenu").hide();
      $('.definition').show();
      // $(".definition").hover( // EXERCICE 3 PART 3 on selectionne la div parent definition, quand on passe la souris au dessus :
      // OPTION 1
      //   function(){
      //     $(".contenu").show();               // Affiche la div enfant refrain en ayant la souris dessus
      
      //   },
      //   function(){
      //     $(".contenu").hide();             // on cache la div enfant refrain en enlevant la souris
      //   }
      // )
$(".definition").mouseleave(function(){ // OPTION 2
  $(".contenu").hide(".contenu");
});

$(".definition").mouseenter(function(){
  $(".contenu").show("contenu");
})
  }

  else {
    $('#lab2').contents().last().replaceWith('Masquer les refrains');
    $(".contenu").show();
    $(".definition").hide();
    // la case vient d'être décochée
  }
});
