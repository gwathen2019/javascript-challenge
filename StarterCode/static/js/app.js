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
console.log(UFO_Report)
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter(state => tableData.state === inputValue);

  console.log(filteredData)
});
