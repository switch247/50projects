<?php
$host = "aws.connect.psdb.cloud";
$username = "3quczhos73i99lyxj98y";
$password = "pscale_pw_HAjf48f0CzHr7ka7pviuZ75gLeZT6MslvczaHLny8Ep";
$db = "jovian-careers";

$connection =  mysqli_connect($host, $username, $password, $db, 3306);
if ($connection->connect_error)
    echo $connection->connect_error;
else
    echo "working";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
   test
</body>

</html>