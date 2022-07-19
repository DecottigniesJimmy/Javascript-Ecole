const myData = [
  { id: 0, name: "John Miller", age: 33, location: "Chicago" },
  { id: 1, name: "Jane Doe", age: 78, location: "Lansing" },
  { id: 2, name: "Jamie Stevens", age: 21, location: "San Diego" }
];

function returnText() {
  let input = document.getElementById('searchBar').value;
  let filteredNames = myData.filter(e => Object.values(e).map(e => String(e)).some(e => e.includes(input)));
  const myJSON = JSON.stringify(filteredNames);
  console.log(filteredNames);
  document.getElementById("test").innerHTML = myJSON;
};