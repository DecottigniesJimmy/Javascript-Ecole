let element = document.getElementById("btn1");
// const date1 = new Date;
element.addEventListener("click", result);

function result() {
    let cejour = new Date();
    let options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    let date = cejour.toLocaleDateString("fr-FR", options);
    let heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
    let dateheure = date + " " + heure;
    dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;   
    document.getElementById("test").innerHTML = `Bonjour je m'apelle ${nom} ${prenom} nous somme le ${dateheure}`
    setInterval(result, 1000);
}

// Debut Axe X Y
const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;

})  
// EXERCICE DU 25/07/2022 09:33