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
      
  } 
  else {
    $('#lab2').contents().last().replaceWith('Masquer les refrains');
    $(span2).replaceWith(span1);
    // la case vient d'être décochée
  }
});
