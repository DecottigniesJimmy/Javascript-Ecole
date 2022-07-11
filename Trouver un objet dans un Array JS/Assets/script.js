const myData=[{name:"John Miller",age:33,location:"Chicago"},{name:"Jane Doe",age:78,location:"Lansing"},{name:"Jamie Stevens",age:21,location:"San Diego"}];

function returnText() {
  let input = document.getElementById('searchBar').value;
  let filteredNames = myData.filter(e => Object.values(e).map(e => String(e)).some(e => e.includes(input)));
  console.log(filteredNames);
  document.getElementById("test").innerHTML = filteredNames;
};


