const char1 = {prenom: "Jimmy", age: "30", sexe: "Homme"};
document.getElementById("demo").innerHTML = `je m'apelle ${char1.prenom}, j'ai ${char1.age} et je suis un ${char1.sexe}`;

const char2 = {
    firstName: "Jimmy",
    lastName: "Decottignies",
    age: 30,
    fullName: function() {
      return this.firstName + " " + this.lastName + " " + this.age;
    }
  };

  document.getElementById("demo2").innerHTML = char2.fullName();