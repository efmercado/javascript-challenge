// from data.js
var tableData = data;


// Using d3 to reference my HTML's table body
var tbody = d3.select("tbody");

// Obtaining UFO Sighting values for each column
tableData.forEach(ufoSighting => {
    
    // Appending a table row 'tr' for each UFO sighting object
    var row = tbody.append("tr");

    // Using Object.values and appending a cell to the row for each value 
    Object.values(ufoSighting).forEach((value) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

// Creating an array of all the unique datetime values
var dateTimes = tableData.map(datetime => datetime.datetime)

// Selecting the filter button
var button = d3.select("#filter-btn");

// Enabling d3 event handling
button.on("click", function() {

    // Clearing the tbody table and appending new filtered results
    var tbody = d3.select("tbody")
    tbody.html("")

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");

    // Get the value property of the input date
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    if(dateTimes.includes(inputValue)){
        // Filter date with datetime equal to input value
        var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue)

        console.log(filteredData)
    
        filteredData.forEach(ufoSighting => {
    
            // Appending a table row 'tr' for each UFO sighting object
            var row = tbody.append("tr")
    
            // Using Object.values and appending a cell to the row for each value 
            Object.values(ufoSighting).forEach((value) =>{
                var cell = row.append("td")
            cell.text(value)
            })
        })
    }
    else {
        tableData.forEach(ufoSighting => {
    
            // Appending a table row 'tr' for each UFO sighting object
            var row = tbody.append("tr");
        
            // Using Object.values and appending a cell to the row for each value 
            Object.values(ufoSighting).forEach((value) =>{
                var cell = row.append("td");
                cell.text(value);
            });
        });
        alert("The searched date is currently not in our database, please try a different date.")
    }
});