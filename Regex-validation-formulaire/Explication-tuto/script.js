// Les reg-ex permet de verifier la présence d'un charactère ou une chaine de caractère dans une expression.

// cela peut permettre par exemple de verifier qu'un utilisateur a bien mis 10 chiffres d'un numéro 
// de telephone dans un formulaire d'inscription

// utilisé le caractère d'encradrement / pour les regex

//exemples : 

let r = /Pierre/;                                // Pierre encadrer par / / permet de contenir la Regex
r = /Pierre/i;                                   // i est une option Regex permettant d'ignorer la casse i veux dire Case insensitive


//Les Options :

//Option : i est une option Regex permettant d'ignorer la casse i veux dire Case insensitive, 
//cela permet de faire comprendre la valeur "Pierre" avec ou sans majuscule, exemples :
r = /Pierre/i;

//Option : g qui permet de trouver le ou les charactères de manière global dans le document, exemples :
r = /Pierre/g;

//Option : m multi ligne 
r = /Pierre/gm

// pour combiner les 2 options
r = /Pierre/ig;

// Les methodes : 

// Method Match() de l'objet string 
//permet de chercher des caractères dans une sequence de caractères (a savoir que il trouvera que la 1ere occurence il faut ajouter l'option /g pour chercher dans la globalité)

// Method Search() de l'objet string
// retourner la position de la 1ere occurence trouver dans une chaine de caractère ou le chiffre -1 si elle n'a pas était retrouvé

// Method Replace() de l'objet string
// rechercher une expression et la remplacer par une autre

// Method test() de l'objet regexp
//permet de recherche une séquence de caractères dans une chaine de caractère revoie true or false 

// Method exec() de l'objet regexp
// permet de rechercher une séquence de caractères dans une chaine de caractère renvoie le text trouver ou null si il ne trouve pas.

// https://regex101.com/ PERMET DE TESTER CES REG EX ET VOIR TOUTE LES OPTIONS DISPONIBLES

