<?php
     require("connect.php");
     require("functions.php");

     // filter the incoming basic request and call the appropriate function
     if (isset($_GET["id"])) {
         $id = $_GET["id"];

         $result = getOneThing($pdo, $id);
     } else {
         $result = getAllThings($pdo);
     }

     echo json_encode($result);