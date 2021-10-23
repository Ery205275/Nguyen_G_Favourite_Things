import { getData } from "./components/Datatry.js";

(() => {
    const   theTeam = document.querySelector("#team-members"),
            theTemplate = document.querySelector("#bio-template").content;

    function buildTeam(info) {
        info.forEach(person => {
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            // add the custom data attribute value to the section tag inside the template
            panel.firstElementChild.dataset.key = person.id;

            memberInfo[0].querySelector('img').src = `images/${person.biopic}`;
            // memberInfo[1].textContent = person.name;
            // memberInfo[2].textContent = person.role;
            // memberInfo[3].textContent = person.nickname;

            // put the virtual panel in the team section in our HTML page
            theTeam.appendChild(panel);
        })
    }
    theTeam.addEventListener("click", getMoreData);

    // pass the buildTeam function to our data miner as a callback
    getData(null, buildTeam);
})()