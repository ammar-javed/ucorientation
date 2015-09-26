//Test
//Stripe.setPublishableKey('pk_test_aaUJw70XxCIC9XWuvdM6hpC3');

// 2015-09-25 update:
// Removing Live Stripe keys 

var checkoutHandler = StripeCheckout.configure({
  key: 'pk_test_aaUJw70XxCIC9XWuvdM6hpC3',
  image: 'images/zombiehand.png',
  currency: 'CAD',
  token: function(response) {
    registrationSlider.goToSlide(1);
    scrollToElement('#registration');

    // token contains id, last4, and card type
    var token = response.id;
    // Insert the token into the form so it gets submitted to the server
    $('#form-one').append($('<input type="hidden" name="stripeToken" />').val(token));

    //Create array with new token for charging
    var stripeToken = {stripeToken: token, firstName: $("input[name='firstName']").val(), lastName: $("input[name='lastName']").val(), email: $("input[name='email']").val()};

    //Call script on server to make the charge
    $.ajax({
      url : "scripts/charge.php",
      type: "POST",
      data : stripeToken,
      cache: false,
      success: function(data, textStatus, jqXHR)
      {
          //If the charge was successful, send the applicant information to the sheet
          var reply = JSON.parse(data);
          if (reply.result == 'success'){
            applicantInfo = $('#form-one').serialize();

            $.ajax({
              url: "https://script.google.com/macros/s/AKfycbwqq43KM3g4rPNABgOfA1ZpQ4RYh-gwozbQlmelPqE7jUIBgyGz/exec",
              dataType: 'jsonp',
              data: applicantInfo,
              cache: false,
              success: function(data, textStatus, jqXHR)
              {
                hideReg();
                $('#success').foundation('reveal', 'open');
                $('#form-one input').last().remove();
              },
              error: function(jqXHR, textStatus, errorThrown)
              {
                console.log(errorThrown);
                $('#failure-incomplete').foundation('reveal', 'open');
                hideReg();
                $('#form-one input').last().remove();
              }
            });
          } else {
            $('#failure-card').foundation('reveal', 'open');
            registrationSlider.goToSlide(0);
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          $('#failure-network').foundation('reveal', 'open');
          registrationSlider.goToSlide(0);
        }
      });
  }
});

$('#registerNext').click(function(){
    //Let script know a form was sent
    $("#form-one").append("<input type='hidden' name='form' value='true' />");
    //serialize and send
    formData = $('#form-one').serialize();
    $.ajax({
      url : 'scripts/register_validation.php',
      type: 'POST',
      data: formData,
      success: function(data, textStatus, jqXHR) {
        var reply = JSON.parse(data);
        var topError;
        if (reply.result == "success")
        {
          // Open Checkout with further options
          checkoutHandler.open({
            name: 'University College Orientation',
            description: '$125.00',
            amount: 12500
          });
        } else {
          $.each(reply, function(i, val) {
            $("." + i).addClass(" " + val);
            if(!topError){
              topError = "."+i;
            }
          });
          registrationSlider.redrawSlider();
          scrollToElement(topError);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $('#failure-network').foundation('reveal', 'open');
      }
    });
  });