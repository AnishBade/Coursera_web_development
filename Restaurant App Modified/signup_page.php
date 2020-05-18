<!DOCTYPE html>
<html>
    <head>
        <link rel=stylesheet href="style.css">
        <title>signup page</title>
        
    </head>
    <body>
        <header>
            <h1>CREATE YOUR NEW ACCOUNT</h1>
        </header>
        <section id="whole">
            <section id="signup">
        
                <?php include 'signup_form.php' ?>
            </section>
        
           
        </section>
        <script src="restaurant.js"></script>
        </body>
</html>
<?php 
include 'connection.php';
if(isset($_POST['create'])){
    $customer_name=$_POST['customer_name'];
    $email_address=$_POST['email_address'];
    $phone_number=$_POST['phone_number'];
    $address=$_POST['address'];
   $age=$_POST['age'];
    $insertquery=" insert into customers_table(
        Name,Email,Phone_number,Address,Age) values('$customer_name','$email_address',
    '$phone_number','$address','$age')";
    

$res=mysqli_query($con,$insertquery);

if($res){
    ?>
    <script>
        alert("Data inserted successfullly");
    </script>
    <?php
}else{
    ?>
    <script>
        alert("Data not inserted ")
    </script>
    <?php
}
}
?>