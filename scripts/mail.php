<?php
require 'PHPMailerAutoload.php';

$resultArray = array();

if($_POST['name'] && $_POST['email'] && $_POST['message']) {
	$mail = new PHPMailer();

	$mail->IsSMTP();

	$mail->SMTPAuth = true;
	$mail->CharSet="UTF-8";
	$mail->SMTPSecure = 'tls';
	$mail->Host = 'smtpout.secureserver.net';
	$mail->Port = 25;

	$mail->Username = 'contact@ucorientation.com';
	$mail->Password = 'contact';

	$mail->SetFrom('contact@ucorientation.com', $_POST['name']);
	$mail->FromName = 'UC Orientation Contact Form';
	$mail->addAddress('ammarj965@gmail.com', 'Co-Chairs');
	$mail->addAddress('orientation.registration@uclit.ca', 'Registration');
	$mail->AddReplyTo($_POST['email'], $_POST['name']);

	$mail->WordWrap = 70;
	$mail->Subject = 'Website Inquiry from ' . $_POST['name'];
	$mail->Body = "Name: " . $_POST['name'] ."<br>";
	$mail->Body .= "Email: " . $_POST['email'] . "<br>";
	$mail->Body .= "Message: " . $_POST['message'] . "<br>";
	$mail->Body .= "<br><br> Note: Just reply to this e-mail to send a reply straight to the Contacting Person.";
	$mail->IsHTML(true);
	
	if(!$mail->send())
	{
		$resultArray['result'] = 'error';
	} 
	else 
	{
		$resultArray['result'] = 'success';
	}

	echo json_encode($resultArray);

} else {

	$resultArray["result"] = 'error';
	echo json_encode($resultArray);
	
}
?>