<?php

// 2015-09-25 update:
// Removing Stripe live secret key to make repositary public

$result = 'success';
$returnArray = array();

if($_POST['stripeToken']) {
	require '../bower_components/stripe/lib/Stripe.php';

	// Set your secret key: remember to change this to your live secret key in production
	Stripe::setApiKey("sk_test_vlwAHJFftiT0bB2Q8oaESXNg"); 

	// Get the credit card details submitted by the form
	$token = $_POST['stripeToken'];

	// Other Variables
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];

	// Create the charge on Stripe's servers - this will charge the user's card
	try 
	{
		$charge = Stripe_Charge::create(array(
		  "amount" => 12500, // amount in cents, again
		  "currency" => "cad",
		  "card" => $token,
		  "description" => "Successful Payment for Applicant: ".$firstName.", ".$lastName.", ".$email));
		if($charge->paid == false){
			$result = 'error';
		}
	} catch(Stripe_CardError $e) {
	  	// The card has been declined
		// perhaps redirect to a fail page
		$result = 'error';
	}  catch (Stripe_InvalidRequestError $e) {
  		// Invalid parameters were supplied to Stripe's API
		$result = 'error';
	} catch (Stripe_AuthenticationError $e) {
	  // Authentication with Stripe's API failed
	  // (maybe you changed API keys recently)
		$result = 'error';
	} catch (Stripe_ApiConnectionError $e) {
	  // Network communication with Stripe failed
		$result = 'error';
	} catch (Stripe_Error $e) {
	  // Display a very generic error to the user, and maybe send
	  // yourself an email
		$result = 'error';
	}

	$returnArray['result'] = $result;
	echo json_encode($returnArray);
} else {

	$result = 'error';
	echo json_encode($returnArray);
}
?>