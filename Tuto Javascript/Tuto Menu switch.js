function menu() 
{
var menu = document.getElementById("menu1").value;
var text;



switch (menu) {
  case "1":
    text = "Vous etes dans le Solde";
    break;
  case "2":
    text = "Vous etes dans le Retrait";
    break;
  case "3":
    text = "Vous etes dans le Virement";
    break;
  case "4":
    text = "Vous etes dans le Depot";
    break;
  case "5":
    text = "Vous etes dans le Historique";
    break;
  case "6":
    text = "Vous etes dans le Rib";
    break;
  case "7":
    text = "Vous etes dans le Retour";
    break;
  default:
    text = "Je ne reconnais pas votre demande.";
}
document.getElementById("demo").innerHTML = text;
}