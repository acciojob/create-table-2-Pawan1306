function createTable() {
  // Prompt for the number of rows and columns
  const rn = parseInt(prompt("Input number of rows"), 10);
  const cn = parseInt(prompt("Input number of columns"), 10);

  // Get the element with id "myTable"
  const myTable = document.getElementById("myTable");

  // Create a new HTML table
  const table = document.createElement("table");

  // Loop to create rows and columns
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  // Clear the existing content of "myTable" and append the new table
  myTable.innerHTML = '';
  myTable.appendChild(table);
}

