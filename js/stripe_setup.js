//Test
Stripe.setPublishableKey('pk_test_aaUJw70XxCIC9XWuvdM6hpC3');
//Live
//Stripe.setPublishableKey('pk_live_JkNrYabdgIqNoa6mCTufa4q8');

var stripeResponseHandler = function(status, response) {
  var $form = $('#payment-form');
  console.log(response);

  if (response.error) {
    // Show the errors on the form
    $form.find('.payment-errors').text(response.error.message);
    $form.find('button').prop('disabled', false);
  } else {
    // token contains id, last4, and card type
    var token = response.id;
    // Insert the token into the form so it gets submitted to the server
    $form.append($('<input type="hidden" name="stripeToken" />').val(token));

    //TODO: add in charge logic
    //TODO: add in sending registration form to doc

  }
};


$('#payment-form').submit(function(e) {
  var $form = $(this);

  //TODO: slide to processing slide.

  // Disable the submit button to prevent repeated clicks
  $form.find('button').prop('disabled', true);

  Stripe.card.createToken($form, stripeResponseHandler);

  // Prevent the form from submitting with the default action
  return false;
});