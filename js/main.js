(() => {
    const   buttons = document.querySelectorAll(".btn"),
            // tName = document.querySelector(".t-name"),
            // tType = document.querySelector(".t-favebreed"),
            // tReason = document.querySelector(".t-reason"),
     
    // Favourite = {};
        theThings = document.querySelector("#favorite");
            // theTemplate = document.querySelector("#fav-template").content

  let Favourite = {
    Thing1: {
        name:"Cat",
        favebreed:"Siamese",
        reason:"They are very small and cute",
        pic:"Thing1.jpeg"
    },
    Thing2: {
        name:"Dog",
        favebreed:"Shiba",
        reason:"They are very caring, cuddly and loving",
        pic:"Thing2.jpeg"
    },
    Thing3: {
        name:"Money",
        favebreed:"Any currency",
        reason:"Could buy anything and solve 99% of all problems",
        pic:"Thing3.jpeg"
    }
};



    
function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
                console.log(data);
                Favourite = data;

               
            })
        .catch(error => console.error(error));
    }
    getData();
    // function showData(){
    //     // let key = this.dataset.key;
    //     // let headline = document.querySelector("section");
    //     let picture = document.querySelector(".t-pic");
    
        
    //     picture.querySelector("img").src = `images/${Favourite[this.dataset.key].url}`;
    // // update the text
    //     tName.textContent =  Favourite[this.dataset.key].name;
    //     tType.textContent =  Favourite[this.dataset.key].favebreed;
    //     tReason.textContent =  Favourite[this.dataset.key].reason;
    //     // console.log(showData);
    // }
    
function buildThing() {
         console.log("clicked");
        // grab the keys from the data object (the names)
    
        // let key = theThings.dataset.key;   
        let panel = document.querySelector(".fav-bio"); 
            if (panel) {
                panel.classList.remove("hidden");
            let containers = panel.children; 
            

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            containers[0].querySelector("img").src = `images/${Favourite[theThings.dataset.key].pic}`;

            // update the text
            containers[1].textContent = Favourite[theThings.dataset.key].name;
            containers[2].textContent = Favourite[theThings.dataset.key].favebreed;
            containers[3].textContent = Favourite[theThings.dataset.key].reason;
            
            }
            else {
                panel.classList.add("hidden");
            }
       
    }
    buttons.forEach(button => (button.addEventListener("click", buildThing)));

    // showData();
 
    buildThing();
    let fadeIn = document.querySelector(".fav-bio");
    document.querySelector(".button").onclick = function() {
        fadeIn.classList.add("fade");}
})()