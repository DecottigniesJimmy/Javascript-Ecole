let modulo = (a, b) => 
{
if 
 (a%b == 0) 
 return "est un nombre Premier"

else {
    (a%b !=0)
    return "Not ok"   
   }
};


document.write(modulo(7, 1));

//Le modulo correspond au reste d'une division euclidienne. C'est comme quand tu posais les divisions en primaire et que tu avais un reste à la fin.
//Exemples:
//5%2 (cinq modulo deux) = 1 car 5 = 2x2 + 1
//12%25 = 12 car 12 = 0x25 + 12
//9%3 = 0 car 9 = 3x3 + 0
//129%64 = 1 car 129 = 64x2 + 1
// En gros tu te dis combien de fois rentre ça dans ça.
// Exemple : 8 % 3 => Combien de fois rentre 3 dans 8 ? => 2 => et 2 x 3 => 6 => et 8 - 6 => 2...
// Autre exemple Pair impair

function modula() {
let x = 45;
if (x % 2 == 0)
{
    document.getElementById("mod").innerHTML = ("x est pair");
}
else
{
    document.getElementById("mod").innerHTML = ("x est impair");
}
}

modula();

