<?php

$result = 'success';
$returnArray = array();
$phonePattern = '/^\+?\d+(-\d+)*$/';
$mmddyyyyPattern = '/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/';
$namePattern = '/[a-zA-Z]+/';

if($_POST['form'])
{
	if(!preg_match($namePattern, $_POST['firstName'])){
		$returnArray['firstName'] = 'error';
		$result = 'error';
	}
	if(!preg_match($namePattern, $_POST['lastName'])){
		$returnArray['lastName'] = 'error';
		$result = 'error';
	}
	if(!preg_match($phonePattern, $_POST['homePhone'])){
		$returnArray['homePhone'] = 'error';
		$result = 'error';
	}
	if(!preg_match($phonePattern, $_POST['cellPhone'])){
		$returnArray['cellPhone'] = 'error';
		$result = 'error';
	}
	if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
		$returnArray['email'] = 'error';
		$result = 'error';
	}
	if(!preg_match($mmddyyyyPattern, $_POST['birthDate'])){
		$returnArray['birthDate'] = 'error';
		$result = 'error';
	}
	if(!preg_match($namePattern, $_POST['gender'])){
		$returnArray['gender'] = 'error';
		$result = 'error';
	}
	if(!preg_match($namePattern, $_POST['emergencyFirstName'])){
		$returnArray['emergencyFirstName'] = 'error';
		$result = 'error';
	}
	if(!preg_match($namePattern, $_POST['emergencyLastName'])){
		$returnArray['emergencyLastName'] = 'error';
		$result = 'error';
	}
	if(!preg_match($phonePattern, $_POST['emergencyPhone'])){
		$returnArray['emergencyPhone'] = 'error';
		$result = 'error';
	}
	if(!preg_match($namePattern, $_POST['emergencyRelation'])){
		$returnArray['emergencyRelation'] = 'error';
		$result = 'error';
	}

	$returnArray['result'] = $result;
}
else
{
	$result = 'error';
	$returnArray['result'] = $result;
}
echo json_encode($returnArray);

?>