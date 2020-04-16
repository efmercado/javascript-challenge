// from data.js
var tableData = data;

// Using d3 to reference my table body
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

// Selecting all filter buttons
var button = d3.selectAll("#filter-btn");
button.on("click", function() {

    // Clearing the tbody table and appending new filtered results
    var tbody = d3.select("tbody")
    tbody.html("")

    // Select the input date, state, shape and get the raw HTML nodes
    var inputElement = d3.select("#input");

    // var inputDate = d3.select('#datetime');
    // var inputCity = d3.select('#city');
    // var inputState = d3.select('#state');
    // var inputCountry = d3.select('#country');
    // var inputShape = d3.select('#shape');

    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");

    // var inputDateVal = inputDate.property("value");
    // var inputCityVal = inputCity.property("value");
    // var inputStateVal = inputState.property("value");
    // var inputCountryVal = inputCountry.property("value");
    // var inputShapeVal = inputShape.property("value");


    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(function(ufoSighting){

        if(inputValue){
        return ufoSighting.datetime === inputValue
            || ufoSighting.city === inputValue 
            || ufoSighting.state === inputValue 
            || ufoSighting.country === inputValue 
            || ufoSighting.shape === inputValue
        }
        // else if(inputDateVal || inputCityVal || inputStateVal || inputCountryVal || inputShapeVal){
        //     switch(inputDateVal || inputCityVal || inputStateVal || inputCountryVal || inputShapeVal){
        //         case ufoSighting.datetime === inputDateVal:
        //             return inputDateVal
            
        //         case ufoSighting.city === inputCityVal:
        //             return inputCityVal
          
        //         case ufoSighting.state === inputStateVal:
        //             return inputStateVal
          
        //         case ufoSighting.country === inputCountryVal:

        //         case ufoSighting.shape === inputShapeVal:
        //             return inputShapeVal
        //             break;
        //         default:
        //             console.log("its not working");
        //     }
        // }
    });
    
    // console.log filter values
    console.log(filteredData);

    filteredData.forEach(ufoSighting => {
    
        // Appending a table row 'tr' for each UFO sighting object
        var row = tbody.append("tr")

        // Using Object.values and appending a cell to the row for each value 
        Object.values(ufoSighting).forEach((value) =>{
            var cell = row.append("td")
        cell.text(value)
        })
    })
});
