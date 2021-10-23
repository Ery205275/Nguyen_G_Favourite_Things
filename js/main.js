import { getData } from "./components/Datatry.js";

(() => {
    const   theThings = document.querySelector("#thingsSection"),
            theTemplate = document.querySelector("#fav-template").content,
            buttons = document.querySelectorAll(".btn");

    function buildThing(info) {
        console.log("clicked");
        info.forEach(thing => {
            let panel = theTemplate.cloneNode(true),
                thingInfo = panel.firstElementChild.children;

            // add the custom data attribute value to the section tag inside the template
            panel.firstElementChild.dataset.key = thing.id;

            thingInfo[0].querySelector('img').src = `images/${person.biopic}`;
     
            // thingInfo[1].textContent = person.name;
            // thingInfo[2].textContent = person.role;
            // thingInfo[3].textContent = person.nickname;

            // put the virtual panel in the team section in our HTML page
            theThings.appendChild(panel);
        })
    }
    function getMoreData(event) {
        if (event.target.closest("section").dataset.key) {
            let key = event.target.closest("section").dataset.key;

            // getData({id: key}, function(data) {
            //     // execute this line as the callback in DataMiner
            //     console.log(data);
            // })

            getData({id: key},  showPortfolioData);
        }
    }

    function showPortfolioData(data) {
        // show the portfolio piece somewhere in your UI
        console.log(data);
    }

    // when we click on a bio panel, we want to retrieve the custom data attribute that refers to the row of data that represents this person in the DB
    // we then pass that ID to our data miner, which in turn passes it to index.php as the query string parameter
    theThings.addEventListener("click", getMoreData);
    buttons.forEach(btn => (btn.addEventListener("click", buildThing)));
    // pass the buildTeam function to our data miner as a callback
    getData(null, buildThing);
})()