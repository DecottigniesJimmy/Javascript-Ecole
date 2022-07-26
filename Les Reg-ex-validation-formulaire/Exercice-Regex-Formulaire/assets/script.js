
let element = document.getElementById("submit"); // on déclare une variable pour l'ensemble de la sécurisation d'un formulaire contenant le bouton submit
// Debut Email
element.addEventListener("click", function validateEmail() {

{
let mail = document.getElementById("mail").value;
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //verifie le format lettre digits caractère spéciaux
if(mail.match(mailformat))                             //
{
    alert("You have entered a valid email address!");
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}
});
// FIN EMAIL

// Debut Date de naissance
element.addEventListener("click", function validatedate() {
  let date = document.getElementById("date").value;
  let dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(date.match(dateformat))
  {
  document.form1.date.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var dd = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
  }
  else
  {
  alert("Invalid date format!");
  document.form1.date.focus();
  return false;
  }
  })
//   FIN DATE DE NAISSANCE

// DEBUT PASSWORD
element.addEventListener("click", function CheckPassword()
{ 
let password = document.getElementById("password").value;
var passw=  /^[A-Za-z]\w{7,14}$/;
if(password.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
});
// Fin Password
