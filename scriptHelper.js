// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    // if any input is empty, stop the submission. If the input for pilotName or copilotName contains numbers, stop the submission
    // if the input for fuelLevel or cargoMass is a string, stop the submission... other whise proceed.
    let form = document.querySelector("launchForm");
        form.addEventListener("submit", function(event) {
    let pilotName = document.querySelector("input[pilotName=name]");
    let copilotName = document.querySelector("input[copilotName=name]");
    let fuelLevel = document.querySelector("input[fuelLevel=number]");
    let cargoMass = document.querySelector("input[cargoMass=number]");
        if (pilotName === "" || copilotName.value === "" || cargoMass.value === "" || fuelLevel.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } if (isNaN(cargoMass.value) || isNaN(fuelLevel.value)) {
            alert("Please enter the correct value for each form field!");
            event.preventDefault();
        } if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
        alert("Please enter the correct value for each form field!");
        event.preventDefault();
        }
    });
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // for (var i = 0; i < testInput.length; i++) {
    // if (testInput[0] === "") {
    //     alert("Empty");
    //     Event.preventDefault();
    //     return ("Empty");
    // } if (isNaN(testInput)) {
    //     alert("Not a number");
    //     Event.preventDefault();
    //     return ("Not a number")
    // } else {
    //     return (testInput);
    // };
    
    // }

    





    // if (!input[pilot] === isNaN){
    //     alert("Please enter a valid Pilot Name");
    // }
    // if (!input[copilotName] === isNaN){
    //     alert("Please enter a valid Copilot Name");
    // }
    // if (input[fuelLevel] === isNaN){
    //     alert("Please enter a valid number for Fuel Level");
    // }
    // if (input[cargoMass] === isNaN){
    //     alert("Please enter a valid number for Cargo Mass");
    // }


 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let pilot = document.getElementById("pilot");
    // let copilot = document.getElementById("copilot");
    // let fuelLevel = document.getElementById("fuelLevel");
    // let cargoMass = document.getElementById("cargoMass");

    // if (validateInput(pilot)) {
    // 

    // }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;