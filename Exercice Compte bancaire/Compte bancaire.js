//------------- Variables Valeur
let solde = 1000;
let agio = 0;


// -----------------------MENU SOLDE
function afficher1()    // connecté avec le button afficher1 dans le html
{
if (solde < 0)
{
    agio = parseFloat(solde) * 0.1;     //Parsefloat pour afficher les décimales Parsint pour entier sans décimal
    let menu1 = "Votre solde est de : " +
            solde +
            " €\n" +
            "Attention vous avez dépasser votre solde debiteur,\nsi vous ne rembourser pas dans la limite du temps\nconvenu, des AGIO vous seront prélevé a hauteur de 10%" +
            "\nPrelevement AGIO : " +
        agio +
        " €";


    document.getElementById("textarea").value = menu1;   // Afficher dans le textarea la fonction avec la variable

}

else
{
    let menu1 = "Votre solde est de : " +
    solde +
    " €";
document.getElementById("textarea").value = menu1;
}
    
}
// ------------------------- MENU RETRAIT
function afficher2()
{
    let retrait = prompt("Combien souhaitez vous retirer : ");
                solde = parseFloat(solde) - parseFloat(retrait);
    let menu2 = "Vous avez retiré : " +
                retrait +
                " €";    
    document.getElementById("textarea").value = menu2;    
}
// ----------------------- MENU CREDITER
function afficher3()
{
    let crediter = prompt("Combien souhaitez vous créditer : ");
                 solde = parseFloat(crediter) + parseFloat(solde);
    let menu3 = "Vous avez crédité votre compte de : " +
                crediter +
                " €";
    document.getElementById("textarea").value = menu3;  
}

function afficher4()
{
   let interet = 0;
        interet = parseFloat(solde * 0.02)
    let menu4 = "Vos interets cette années sont de : " + 
                interet +
                " €";
    document.getElementById("textarea").value = menu4;
}

//fonction qui efface l'écran 
function effacer() 
{ 
    document.getElementById("textarea").value = "Veuillez recupérer votre carte ..."
    setTimeout(function(effacer){document.getElementById("textarea").value =("Merci et bonne journée avec Jimmy's Bank")},2000);
    setTimeout(function(){           // Refresh la page après 5 secondes
        window.location.reload();    // Refresh la page après 5 secondes
     }, 5000);                       // Refresh la page après 5 secondes
} 
