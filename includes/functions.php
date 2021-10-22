<?php
// include the connect file so that we can access our DB
include("connect.php");

// store the SQL query in a variable
$query = "SELECT * FROM data";

// this is the database result 
$runQuery = $pdo->query($query);

//store each row of data in an mepty array
$result = array();

// process DB result and make something we can use with AJAX
while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)){
    $result[] = $row;
}

// send DB reult back to JS files as JSON object
echo (json_encode($result));