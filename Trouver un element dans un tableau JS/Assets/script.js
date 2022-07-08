var etudiant = [];

etudiant[0] = "Salome";

etudiant[1] = "Oceane";

etudiant[2] = "Karim";

etudiant[3] = { name: "Jimmy", age: 30 };

etudiant[4] = "Benoit";

etudiant[5] = "Frederic";

etudiant[6] = "Gregory";

etudiant[7] = "Camille";

etudiant[8] = "Anthony";

etudiant[9] = "Cedric";

etudiant[10] = "Stephane";

etudiant[11] = "Perrine";

etudiant[12] = "Theo";

etudiant[13] = "Outman";

etudiant[14] = "Halim";

etudiant[15] = "Zakaria";


// console.table(etudiant);

// document.write("</br>");

// document.write(voici le prenom ${etudiant[6]} inclus dans le tableau);



// console.log("Tableau avec instruction break")



// for (let i = 0; i < etudiant.length; i++ ) {

      // if (etudiant[i] === "Stephane") {

            // break; }

      // console.log(etudiant[i]);

// }



// console.log("Nouveau tableau avec l'instruction continue")



// for (let i = 0; i < etudiant.length; i++ ) {

      // if (etudiant[i] === "Stephane") {

            // continue; }

      // console.log(etudiant[i]);

// }
function search() {
      var input = document.getElementById("Input").value;
      for (let i = 0; i < etudiant.length; i++) {
        if (etudiant[i] == input) {
          document.getElementById("result").innerHTML = (etudiant[i]);
          return;
        }
      }
      document.getElementById("result").innerHTML = 'Pas dans la liste';

    };