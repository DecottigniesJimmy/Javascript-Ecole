
let prixboisson = prompt("Prix Boisson");
document.write(" Prix boisson : ");
document.write(prixboisson);
document.write(" €");
document.write("<br/>");

let quantiteboisson = prompt("Quantité boisson");
document.write(" Quantité boisson : ");
document.write(quantiteboisson);
document.write("<br/><br/>");

let prixplat = prompt("Prix Plat");
document.write(" Prix Plat : ");
document.write(prixplat);
document.write(" €");
document.write("<br/>");

let quantiteplat = prompt("Quantité plat");
document.write(" Quantité Plat : ");
document.write(quantiteplat);
document.write("<br/><br/>");

let prixsupplement = prompt("Prix supplément");
document.write(" Prix supplément : ");
document.write(prixsupplement);
document.write(" €");
document.write("<br/>");

let quantitesupplement = prompt("Quantité supplément");
document.write(" Quantité supplément : ");
document.write(quantitesupplement);

document.write("<br/>");
document.write("____________________________________");
document.write("<br/>");

prixboisson = prixboisson*quantiteboisson;
document.write(" Totale de vos boissons : ");
document.write(prixboisson);
document.write(" €");
document.write("<br/>");

prixplat = prixplat*quantiteplat;
document.write(" Totale de vos Plats : ");
document.write(prixplat);
document.write(" €");
document.write("<br/>");

prixsupplement = prixsupplement*quantitesupplement;
document.write("Totale de vos suppléments : ");
document.write(prixsupplement);
document.write(" €");


let totalht = 0;
totalht = prixboisson + prixplat + prixsupplement;

document.write("<br/>");
document.write("____________________________________");
document.write("<br/>");

document.write("Montant HT : ");
document.write(totalht);
document.write(" €");
document.write("<br/>");

let tva = 0;
tva = totalht*0.1

document.write(" TVA 10% : ");
document.write(tva);
document.write(" €");
document.write("<br/>");

let totalttc = 0;
totalttc = totalht + tva

document.write("Montant TTC : ");
document.write(totalttc);
document.write(" €");
document.write("<br/>");

document.write("<br/>");
document.write("____________________________________");
document.write("<br/><br/>");


