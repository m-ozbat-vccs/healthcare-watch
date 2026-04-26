<?php

$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$emailAddress = $_POST['email'];
$message = $_POST['message'];

$to = "youremailaddress";
$subject = "Form Submission";
$body = "";

$body .= "From: ".$firstName." ".$lastName."\r\n";
$body .= "Email: ".$emailAddress."\r\n";
$body .= "Message: ".$message."\r\n";

mail($to,$subject,$body);

// Note: Validation can also be done via PHP. It requires logic and 
// a few reserved PHP methods.

?>