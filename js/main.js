//imports statement go to top
import { getData } from "./components/Datatry.js";

(() => {
    const   theThings = document.querySelector("#thingsSection"),
            theTemplate = document.querySelector("#fav-template").content;

    function buildThing(info) {

        //debugger; 

        // grab the keys from the data object (the names)
        //const things = Object.keys(info);

        info.forEach(thing => {
            let panel = theTemplate.cloneNode(true); // make a copy of the template content
                thingInfo = panel.firstElementChild.children; // get a reference to the template content

               

            thingInfo[0].querySelector("img").src = `images/${thing.biopic}`;

    
            // thingInfo[1].textContent = thing.name;
            // thingInfo[2].textContent = thing.favebreed;
            // thingInfo[3].textContent = thing.reasone;

            theThings.appendChild(panel);
        });

    }

    getData(null, buildThing);
})();