// Write your helper functions here!

// require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById('missionTarget').innerHTML =
                ` <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`

 }
 
 function validateInput(testInput) {


    if (testInput === '') {
        return "Empty";
    } if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }

}

    
    
    
    
    
    
    
    
    
    
    
    
    
    



 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
// validate each input according to assignment specifications (carLevel needs to be number, etc.)[ALERT], then validate each input is qualified (cargoLevel is > 1000, etc.)[innerHTML]

        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(cargoLevel) === "Empty" || validateInput(cargoLevel) === "Empty" === "") {
            // alert("All fields are required!");
        } if (validateInput(cargoLevel) === "Not a Number" || validateInput(fuelLevel) === "Not a Number") {
            // alert("Please enter the correct value for each form field!");
        } if (validateInput(pilot) === !NaN || validateInput(copilot) === !NaN) {
        // alert("Please enter the correct value for each form field!");
        }
        
        if (fuelLevel < 10000 && cargoLevel < 10000){
            document.getElementById("faultyItems").style="visibility: visible";
            document.getElementById("launchStatus").style.color="red";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }
        if (cargoLevel > 10000){
            document.getElementById("faultyItems").style="visibility: visible";
            document.getElementById("launchStatus").style.color="red";
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }
        if (fuelLevel < 10000 && cargoLevel > 10000){
            document.getElementById("faultyItems").style="visibility: visible";
            document.getElementById("launchStatus").style.color="red";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }
        if (fuelLevel >= 10000 && cargoLevel < 10000){
            document.getElementById("faultyItems").style="visibility: visible";
            document.getElementById("launchStatus").style.color="green";
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }





        // if (validateInput(cargoLevel) > 10000){
        // document.getElementById("faultyItems").style="visibility: visible";
        // document.getElementById("fuelStatus").innerHTML = `${fuelLevel}kg is too high for the mission`;
        // document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        // document.getElementById("launchStatus").style.color="red";
        // } else if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number") {
        //     document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
        //     document.getElementById("launchStatus").style.color="green";
        //     document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
        //     document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        // }





}

 
 
 async function myFetch() {
     let planetsReturned;
//  chapter 27 for example
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response);
        return response.json()
        });
        return planetsReturned;
    // });
        
 
    //  return planetsReturned;
    
 }
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;