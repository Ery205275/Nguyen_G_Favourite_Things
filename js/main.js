(() => {
    const   theThings = document.querySelector("#thingsSection"),
            theTemplate = document.querySelector("#fav-template").content;

    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./includes/functions.php") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
               // console.log(data);

                buildThing(data[0]);
            })
            .catch(error => console.error(error));
    }

    function buildThing(info) {

        //debugger; 

        // grab the keys from the data object (the names)
        //const things = Object.keys(info);

        info.forEach(thing => {
            let panel = theTemplate.cloneNode(true); // make a copy of the template content
            let thingInfo = panel.firstElementChild.children; // get a reference to the template content

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            thingInfo[0].querySelector("img").src = `images/${thing.biopic}`;

    
            thingInfo[1].textContent = thing.name;
            thingInfo[2].textContent = thing.favebreed;
            thingInfo[3].textContent = thing.reasone;

            theThings.appendChild(panel);
        });

    }

    getData();
})();