function checkForm(f) {
    alert("Controle de champ \n" + "Nom : " + f.elements["chp"].value + "\n" 
                                 + "Prénom : " + f.elements["chp1"].value + "\n" 
                                 + "Age : " + f.elements["chp2"].value) + "\n"

    return false; // n'envoie pas le formulaire
}