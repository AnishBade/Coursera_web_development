<?php 
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=restaurant_db',
    'anish','bade');
    //see the errors folder for  details...
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
?>