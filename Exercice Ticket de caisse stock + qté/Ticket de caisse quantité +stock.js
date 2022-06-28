function stockboisson1() {
    if (quantiteboisson > stockboisson) {
        alert("Stock insuffisant veuillez ressaisir");
        stockboisson = Originalstockboisson;
        let quantiteboisson = prompt("Quantité boisson");
        stockboisson = stockboisson - quantiteboisson;
        document.write(" Quantité boisson : ");
        document.write(quantiteboisson);
        document.write("<br/>");
        document.write("Votre stock de boisson est de : ");
        document.write(stockboisson);
        document.write("<br/><br/>");    
    }
    else
    {
        document.write(" Quantité boisson : ");
        document.write(quantiteboisson);
        document.write("<br/>");
        stockboisson = stockboisson - quantiteboisson; 
        document.write("Votre stock de boisson est de : ");
        document.write(stockboisson);
        document.write("<br/><br/>");     
    }
}

function stockplat1() {
    if (quantiteplat > stockplat) {
        alert("Stock insuffisant veuillez ressaisir");
        stockplat = Originalstockplat;
        let quantiteplat = prompt("Quantité Plat");
        stockplat = stockplat - quantiteplat;
        document.write(" Quantité Plat : ");
        document.write(quantiteplat);
        document.write("<br/>");
        document.write("Votre stock de Plat est de : ");
        document.write(stockplat);
        document.write("<br/><br/>");    
    }
    else
    {
        document.write(" Quantité Plat : ");
        document.write(quantiteplat);
        document.write("<br/>");
        stockplat = stockplat - quantiteplat; 
        document.write("Votre stock de Plat est de : ");
        document.write(stockplat);
        document.write("<br/><br/>");     
    }
}

function stocksupplement1() {
    if (quantitesupplement > stocksupplement) {
        alert("Stock insuffisant veuillez ressaisir");
        stocksupplement = Originalstocksupplement;
        let quantitesupplement = prompt("Quantité Supplément");
        stocksupplement = stocksupplement - quantitesupplement;
        document.write(" Quantité Supplément : ");
        document.write(quantitesupplement);
        document.write("<br/>");
        document.write("Votre stock de Supplément est de : ");
        document.write(stocksupplement);
        document.write("<br/><br/>");    
    }
    else
    {
        document.write(" Quantité Supplément : ");
        document.write(quantitesupplement);
        document.write("<br/>");
        stocksupplement = stocksupplement - quantitesupplement; 
        document.write("Votre stock de Supplément est de : ");
        document.write(stocksupplement);
        document.write("<br/><br/>");  
    }
}

let Originalstocksupplement = 4;
let Originalstockboisson = 4;
let Originalstockplat = 4;
let stockboisson = 4;
let stockplat = 4;
let stocksupplement = 4;

let prixboisson = 5;
document.write(" Prix boisson : ");
document.write(prixboisson);
document.write(" €");
document.write("<br/>");

let quantiteboisson = prompt("Quantité boisson");
stockboisson1();

let prixplat = 10;
document.write(" Prix Plat : ");
document.write(prixplat);
document.write(" €");
document.write("<br/>");

let quantiteplat = prompt("Quantité plat");
stockplat1();


let prixsupplement = 2.50;
document.write(" Prix supplément : ");
document.write(prixsupplement);
document.write(" €");
document.write("<br/>");

let quantitesupplement = prompt("Quantité supplément");
stocksupplement1();

document.write("<br/>");
document.write("____________________________________");
document.write("<br/>");

prixboisson = prixboisson * quantiteboisson;
document.write(" Totale de vos boissons : ");
document.write(prixboisson.toFixed(2));
document.write(" €");
document.write("<br/>");

prixplat = prixplat * quantiteplat;
document.write(" Totale de vos Plats : ");
document.write(prixplat.toFixed(2));
document.write(" €");
document.write("<br/>");

prixsupplement = prixsupplement * quantitesupplement;
document.write("Totale de vos suppléments : ");
document.write(prixsupplement.toFixed(2));
document.write(" €");


let totalht = 0;
totalht = prixboisson + prixplat + prixsupplement;

document.write("<br/>");
document.write("____________________________________");
document.write("<br/>");

document.write("Montant HT : ");
document.write(totalht.toFixed(2));
document.write(" €");
document.write("<br/>");

let tva = 0;
tva = totalht * 0.1

document.write(" TVA 10% : ");
document.write(tva.toFixed(2));
document.write(" €");
document.write("<br/>");

let totalttc = 0;
totalttc = totalht + tva

document.write("Montant TTC : ");
document.write(totalttc.toFixed(2));
document.write(" €");
document.write("<br/>");

document.write("<br/>");
document.write("____________________________________");
document.write("<br/><br/>");


