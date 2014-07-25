<?php
require 'PHPMailerAutoload.php';

$resultArray = array();

if($_POST['name'] && $_POST['email'] && $_POST['message']) {
	$mail = new PHPMailer;

	$mail->IsSMTP();
	$mail->Host = 'localhost';

	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'tls';
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 587;

	$mail->Username = 'orientation.registration@uclit.ca';
	$mail->Password = 'fuckingTITS';

	//$mail->From = $_POST['email'];
	$mail->SetFrom($_POST['email'], $_POST['name']);
	$mail->FromName = 'UC Orientation Contact Form';
	$mail->addAddress('orientation@uclit.ca', 'Co-Chairs');
	$mail->addCC('orientation.registration@uclit.ca');
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