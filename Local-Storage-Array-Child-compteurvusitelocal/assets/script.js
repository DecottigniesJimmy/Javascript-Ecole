function addItem(){
let names = [];
names[0] = document.getElementById("box1").value;

localStorage.setItem("names", JSON.stringify(names));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(names)
console.log(storedNames)
}

// Détection
if(typeof localStorage!='undefined') {
    // Récupération de la valeur dans web storage
    var nbvisites = localStorage.getItem('visites');
    // Vérification de la présence du compteur
    if(nbvisites!=null) {
      // Si oui, on convertit en nombre entier la chaîne de texte qui fut stockée
      nbvisites = parseInt(nbvisites);
    } else {
      nbvisites = 0;
    }
    // Incrémentation
    nbvisites++;
    // Stockage à nouveau en attendant la prochaine visite...
    localStorage.setItem('visites',nbvisites);
    // Affichage dans la page
    document.getElementById('visites').innerHTML = nbvisites;
  } else {
    alert("localStorage n'est pas supporté");
  }

  // Attention : cette information restera spécifique et locale au visiteur, ne sera pas échangée avec le serveur 
  //et donc ne pourra être exploitée pour établir des statistiques générales.