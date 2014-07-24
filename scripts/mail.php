<?php
$resultArray = array();
if($_POST['name'] && $_POST['email'] && $_POST['message']) {
	$from = $_POST['email'];
	$to = "ammarj965@gmail.com";

	$subject = "Website Contact Form - ".$_POST['name'];
	$message = $_POST["message"];
    // message lines should not exceed 70 characters (PHP rule), so wrap it
	$message = wordwrap($message, 70);

    // create email headers

	$headers = 'From: '.$from."\r\n".

	'Reply-To: '.$from."\r\n" .

	'X-Mailer: PHP/' . phpversion();
    // send mail
	mail($to,$subject,$message, $headers);

	// perhaps go to a success page instead
	$resultArray["result"] = 'success';
	echo json_encode($resultArray);
} else {
	$resultArray["result"] = 'error';
	echo json_encode($resultArray);
}
?>