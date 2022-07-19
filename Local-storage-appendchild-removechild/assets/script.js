// TUTO COMPLET LOCAL STORAGE : https://blog.logrocket.com/localstorage-javascript-complete-guide/


function addItem1() {
    var newItem = document.createElement("div");   // crée un element div onclick button 
    newItem.innerHTML = document.getElementById("box1").value; // on demande d'écrire en html la value récuperé par l'input dans la nouvelle div juste au dessus
    document.getElementById("list").appendChild(newItem); // on récuperer la div list  puis on demande d'ajouter la div crée précedemment avec ca valeur
    newItem.onclick = removeItem; // on supprime un enfant(element) de la liste avec le click gauche appel fonction removeitem
    saveList();
}

function removeItem(){
    document.getElementById("list").removeChild(this); // permet de supprimer une div enfant avec le clic gauche
    saveList();
}

function saveList() {
    localStorage.test = document.getElementById("list").innerHTML; // permet de sauvegarder en local les données utiliser localeStorage.(création d'une clé(un id) en l'occurence test puis la valeur exemple = document.getelementsbyid.value
}

function loadList() {
    document.getElementById("list").innerHTML = localStorage.test; // recharger la liste apres fermeture de la fenetre 
    for(var i = 0; i < list.children.length; i++) {
        list.children[i].onclick = removeItem; // création d'une boucle pour recuperer les enfants sauvegardé
      }
}

if(localStorage.test) {     // si local storage alors charger celui ci
    loadList();
    removeItem(); // permet de supprimer après actualisation ou fermeture de la page 
}