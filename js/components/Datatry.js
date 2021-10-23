// set up a Fetch function and get some data
function getData(cb) { //cd = call back
    // retrieve our data object
    fetch("./includes/index.php") // go and get the data (fetch boy!)
        .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
        .then(data => {
           console.log(data);

            cb(data[0]);
        })
        .catch(error => console.error(error));
}

export { getData }