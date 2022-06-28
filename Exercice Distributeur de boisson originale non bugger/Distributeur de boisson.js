// Variable Valeur
let credit = 0;
let originalstockcafe = 2;
let originalstockcafenois = 2;
let originalstockchocolat = 2;
let originalstockcappucino = 2;
let originalstockjus = 2;
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
            document.getElementById("textarea").innerHTML = "Veuillez patienter votre boisson est en cours de préparation. . ." + cpt + "sec";
        }
        else
        {
            document.getElementById("textarea").innerHTML = "Votre boisson est prete bonne degustation !" +
            "Vos crédits : " +
            credit +
            " €";
            clearInterval(timer);
        }
    }, 1000);
}
//------------------------------------------------------------------
 


function afficheron()
{
    let menuon= "Bonjour veuillez inserer votre monnaie : "
    document.getElementById("textarea").value = menuon;   // Afficher dans le textarea la fonction avec la variable
}

function afficheroff()
{ 
        credit = 0;
        document.getElementById("textarea").value = "Veuillez recupérer votre monnaie ..."
        setTimeout(function(effacer){document.getElementById("textarea").value =("Merci et bonne journée avec :\n Dolce Jimmy")},2000);
        setTimeout(function(){           // Refresh la page après 5 secondes
            window.location.reload();    // Refresh la page après 5 secondes
         }, 5000);                       // Refresh la page après 5 secondes 
}

function afficherdog()
{
    credit = credit+1;
    document.getElementById("textarea").value = "Credit "+
                                                credit +
                                                " €";
    console.log(credit);
}

function afficher1()
{
    if(stockcafe <= 0){
        let cafe = "Stock insuffisant, veuillez selectionner une autre boisson. . .\n\n\n\n"
         document.getElementById("textarea").value = cafe;
    }

    else{
    credit = credit-1;
    stockcafe = stockcafe-1;
    cafe = "Veuillez patienter votre café est en cours de préparation. . .\n\n\n\n"+
    "Votre café est prêt, Bonne dégustation.\n\n"+
"Vos crédits : " +
credit +
" €"
     document.getElementById("textarea").value = cafe;
     console.log(stockcafe);
    };

    if(credit < 0){
        credit = credit+1;
        stockcafe = stockcafe+1;
        let cred = "credit insuffisant, veuillez deposer de la monnaie dans la machine. . ."
        document.getElementById("textarea").value = cred};
}

function afficher2()
{
    if(stockcafenois <= 0){
        let cafenois = "Stock insuffisant, veuillez selectionner une autre boisson. . .\n\n\n\n"
         document.getElementById("textarea").value = cafenois;
    }

    else{
    credit = credit-1;
    stockcafenois = stockcafenois-1;
    cafenois = "Veuillez patienter votre café noisette est en cours de préparation. . .\n\n\n\n"+
               "Votre café noisette est prêt, Bonne dégustation.\n\n"+
     "Vos crédits : " +
     credit +
     " €"
     document.getElementById("textarea").value = cafenois;
     console.log(stockcafenois);
    };

    if(credit < 0){
        credit = credit+1;
        stockcafenois = stockcafenois+1;
        let cred = "credit insuffisant, veuillez deposer de la monnaie dans la machine. . ."
        document.getElementById("textarea").value = cred;};
}

function afficher3()
{
    if(stockchocolat <= 0){
        let chocolat = "Stock insuffisant, veuillez selectionner une autre boisson. . .\n\n\n\n"
         document.getElementById("textarea").value = chocolat;
    }

    else{
    credit = credit-1;
    stockchocolat = stockchocolat-1;
    chocolat = "Veuillez patienter votre chocolat est en cours de préparation. . .\n\n\n\n"+
               "Votre chocolat est prêt, Bonne dégustation.\n\n"+
     "Vos crédits : " +
     credit +
     " €"
     document.getElementById("textarea").value = chocolat;
     console.log(stockchocolat);
    };

    if(credit < 0){
        credit = credit+1;
        stockchocolat = stockchocolat+1;
        let cred = "credit insuffisant, veuillez deposer de la monnaie dans la machine. . ."
        document.getElementById("textarea").value = cred;};
}

function afficher4()
{
    if(stockcappucino <= 0){
        let cappucino = "Stock insuffisant, veuillez selectionner une autre boisson. . .\n\n\n\n"
         document.getElementById("textarea").value = cappucino;
    }

    else{
    credit = credit-1;
    stockcappucino = stockcappucino-1;
    cappucino = "Veuillez patienter votre cappucino est en cours de préparation. . .\n\n\n\n"+
               "Votre cappucino est prêt, Bonne dégustation.\n\n"+
     "Vos crédits : " +
     credit +
     " €"
     document.getElementById("textarea").value = cappucino;
     console.log(stockcappucino);
    };

    if(credit < 0){
        credit = credit+1;
        stockcappucino = stockcappucino+1;
        let cred = "credit insuffisant, veuillez deposer de la monnaie dans la machine. . ."
        document.getElementById("textarea").value = cred;};
}

function afficher5()
{
    if(stockjus <= 0){
        let jus = "Stock insuffisant, veuillez selectionner une autre boisson. . .\n\n\n\n"
         document.getElementById("textarea").value = jus;
    }

    else{
    credit = credit-1;
    stockjus = stockjus-1;
    jus = "Veuillez patienter votre jus d'orange est en cours de préparation. . .\n\n\n\n"+
               "Votre jus d'orange est prêt, Bonne dégustation.\n\n"+
     "Vos crédits : " +
     credit +
     " €"
     document.getElementById("textarea").value = jus;
     console.log(stockjus);
    };

    if(credit < 0){
        credit = credit+1;
        stockjus = stockjus+1;
        let cred = "credit insuffisant, veuillez deposer de la monnaie dans la machine. . ."
        document.getElementById("textarea").value = cred;};
}