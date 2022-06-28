// Variable Valeur
let credit = 0;
let stockcafe = 2;
let stockcafenois = 2;
let stockchocolat = 2;
let stockcappucino = 2;
let stockjus = 2;

// Fonctions :

// TIMER de 5sec--------------------------------------------------
function decompte()
{
    var cpt = 5;
 
    timer = setInterval(function(){
        if(cpt>0)
        {
            --cpt; // décrémente le compteur
            document.getElementById("screen").innerHTML = "Veuillez patienter votre boisson est en cours de préparation. . ." + cpt + "sec";
        }
        else
        {
            document.getElementById("screen").innerHTML = "Votre boisson est prete bonne degustation !" +
            "Vos crédits : " +
            credit +
            " €";
            clearInterval(timer);
        }
    }, 1000);
    console.log(cpt);
}

//------------------------------------------------------------------

function afficheron()
{
    let menuon= "Bonjour veuillez inserer votre monnaie : "
    document.getElementById("screen").innerHTML = menuon;   // Afficher dans le screen la fonction avec la variable
}

function afficheroff()
{ 
        credit = 0;
        document.getElementById("screen").innerHTML = "Veuillez recupérer votre monnaie ..."
        setTimeout(function(effacer){document.getElementById("screen").innerHTML =("Merci et bonne journée avec :\n Dolce Jimmy")},2000);
        setTimeout(function(){           // Refresh la page après 5 secondes
            window.location.reload();    // Refresh la page après 5 secondes
         }, 5000);                       // Refresh la page après 5 secondes 
}

function afficherdog()
{
    credit = credit+1;
    document.getElementById("screen").innerHTML = "Credit "+
                                                credit +
                                                " €";
    console.log(credit);
}


function afficher1()
{

        if(credit <= 0){
            let cred = "credit insuffisant, veuillez deposer de la monnaie dans la machine. . ."
            document.getElementById("screen").innerHTML = cred}

        else
        {
        credit = credit-1;
        stockcafe = stockcafe-1;
        decompte();
        }
}