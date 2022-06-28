function calculate(){
    let a= document.getElementById("n1").value;
    let b= document.getElementById("n2").value;
    let ttc = (a*b)
    document.getElementById("totale1").innerHTML = ttc.toFixed(2) + " € TVA";
}

function calc2(){
    let a= document.getElementById("n1").value;
    let b= document.getElementById("n2").value;
    let tva = parseFloat (a*b)-(a*b) / 1.1;
    document.getElementById("totale2").innerHTML = tva.toFixed(2) + " € TVA";
}

function calc3(){
    let a= document.getElementById("n1").value;
    let b= document.getElementById("n2").value;
    let ht = parseFloat (a*b) / 1.1;
    document.getElementById("totale3").innerHTML = ht.toFixed(2) + " € HT";
}


