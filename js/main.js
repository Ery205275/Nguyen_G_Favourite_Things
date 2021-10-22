(() => {
    const   theThings = document.querySelector("#thingsSection"),
            theTemplate = document.querySelector("#fav-template").content;

    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
                console.log(data);

                buildThing(data);
            })
        .catch(error => console.error(error));
    }

    function buildThing(info) {

        // grab the keys from the data object (the names)
        const things = Object.keys(info);

        things.forEach(thing => {
            let panel = theTemplate.cloneNode(true); // make a copy of the template content
            let containers = panel.firstElementChild.children; // get a reference to the template content

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            containers[0].querySelector("img").src = `images/${info[thing].biopic}`;

            // update the text
            containers[1].textContent = info[thing].name;
            containers[2].textContent = info[thing].favebreed;
            containers[3].textContent = info[thing].reason;

            theThings.appendChild(panel);
        });

    }

    getData();
})();