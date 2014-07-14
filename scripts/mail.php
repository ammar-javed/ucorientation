<?php
if($_POST['name'] && $_POST['email'] && $_POST['message']) {
	$from = $_POST['email'];
	$to = "orientation@uclit.ca";

    $subject = "Website Contact Form - ".$_POST['name'];
    $message = $_POST["message"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
    $message = wordwrap($message, 70);
    // send mail
    mail($to,$subject,$message,"From: $from\r\n"."Reply-To: $from\r\n");

	header('Location: http://www.ucorientation.com/#/contact');
	// perhaps go to a success page instead
	die();
} else {
	header('Location: http://www.ucorientation.com/#/contact');
	die();
}
?>