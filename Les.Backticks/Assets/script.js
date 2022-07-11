const name = 'Gerardo';
const surname = 'Fernández';
const telephone = '123 123 123';
// "Old syntax"
const userInfo = 'User info: ' + name1 + ' ' + surname + ' ' + telephone;
// "New syntax"
const userInfo = `User info: ${name2} ${surname} ${telephone}`;

function recive(){

    let number = document.getElementById("entry").value;



    document.getElementById("response").innerHTML = `Le carré de ${number} est ${number*number}`; //backtick

    document.getElementById("response2").innerHTML = "Le carré de " + number + " est " + number*number; //vieille methode



    console.log(`Le carré de ${number} est ${number*number}`);