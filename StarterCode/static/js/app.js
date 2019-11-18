// from data.js
var tableData = data;
// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");
// YOUR CODE HERE!

data.forEach((UFO_Report) => {
  var row = tbody.append("tr");
  Object.entries(UFO_Report).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
console.log(UFO_Report);
});