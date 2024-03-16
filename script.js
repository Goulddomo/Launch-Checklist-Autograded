// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
// Listed planets: use my fetch to get array of listed planets, then pick a random planet using pickPlanet function from scriptHelper.js. Then use addDestinationInfo function from scriptHelper.js to fill in HTML

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        target = pickPlanet(listedPlanets);
        console.log(target);
        addDestinationInfo(window.document, target.name, target.diameter, target.star, target.distance, target.moons, target.image);
    })

    // submit form, prevent the default, inside the form collect the values from the fields and pass them to form submission function
    // form = document.getElementById('testForm');      
    console.log("test"); 
    document.getElementById("launchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        

        let list = document.getElementById("faultyItems");
        let pilot = document.getElementById("pilotName");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        console.log(pilot);
        console.log(pilot.value);
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
        //     event.preventDefault();
        });

    });
            
           
           
           
           
           
           
           
           
           
           
           
           
            // event.preventDefault();
            // formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
            // let form = document.querySelector("launchForm");
            //     form.addEventListener("submit", function(event) {
            //     // formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
            // event.preventDefault();

            // let pilot = document.querySelector("input[pilot=name]");
            // let copilot = document.querySelector("input[copilot=name]");
            // let fuelLevel = document.querySelector("input[fuelLevel=number]");
            // let cargoLevel = document.querySelector("input[cargoMass=number]");
            // formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) 

    //             })
            

        
    // });
// });

    // let form = document.querySelector("form");
    //     form.addEventListener("submit", function(event) {
    //     let pilot = document.querySelector("input[name=pilotName]");
    //     let teamName = document.querySelector("input[name=team]");

//  });