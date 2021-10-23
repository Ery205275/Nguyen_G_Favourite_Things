<?php

// store the SQL query in a variable
$result = array();

function getOneThing($conn, $thing) {
    $query = "SELECT * FROM data WHERE id='".$thing."'";
    
    // this is the database result 
    $runQuery = $conn->query($query);
    
    //store each row of data in an mepty array
    $result = array();
    
    // process DB result and make something we can use with AJAX
    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)){
        $result[] = $row;
    }
     return $result;
}

function getAllThings($conn) {
$query = "SELECT * FROM data";

// this is the database result 
$runQuery = $conn->query($query);

//store each row of data in an mepty array
$result = array();

// process DB result and make something we can use with AJAX
while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)){
    $result[] = $row;
}
 return $result;
}
// // send DB reult back to JS files as JSON object
// echo (json_encode($result));