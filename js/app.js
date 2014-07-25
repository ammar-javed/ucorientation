// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
var registrationSlider;
var aboutslider;
var gallery;
var contactSlider;

var showRegSlider = function() {
  $('#form-one')[0].reset();
  $('#payment-form')[0].reset();
  $('#registration').show();
  scrollToElement('#registration');
}

var hideReg = function(){
  $('#form-one')[0].reset();
  $('#payment-form')[0].reset();
  $('#registration').hide(500);
  registrationSlider.goToSlide(0);
}

var scrollToElement = function(selector, callback){
  var animation = {scrollTop: $(selector).offset().top-50};
  $('html,body').animate(animation, 'slow', 'swing', function() {
    if (typeof callback == 'function') {
      callback();
    }
    callback = null;
  });
}

$(document).ready(function(){

  aboutslider = $('.bxslider').bxSlider({
    mode: "fade",
    adaptiveHeight: true,
    controls: false,
    pager: true
  });

  registrationSlider = $('.registration-slider').bxSlider({
    mode: "fade",
    adaptiveHeight: true,
    controls: false,
    pager: false
  });
  gallery = $('.gallery').bxSlider({
    mode: "fade",
    adaptiveHeight: true,
    auto: true,
    autoControls: true,
    autoControlsCombine: true,
    pager: false
  });
  contactSlider = $('.contact').bxSlider({
    mode: "fade",
    adaptiveHeight: true,
    controls: false,
    pager: false
  });
  $('#registration').hide();

  $(function() {
        // Slow slides for internal links
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 30
              }, 1500);
              if ($(window).width() < 600)
              {
                $('nav ul').slideUp();
              }
              return false;
            }
          }
        }); 
      });
  $("#history-link").click(function() {
    aboutslider.goToSlide(0);
  });
  $("#residence-link").click(function() {
    aboutslider.goToSlide(1);
  });
  $("#commuter-link").click(function() {
    aboutslider.goToSlide(2);
  });

  $('#form-one :input').on('invalid', function(){
    registrationSlider.redrawSlider();
  });

  $('#form-one :input').on('vaild', function(){
    registrationSlider.redrawSlider();
  });

  $('#payment-form').on('valid', function(){
    registrationSlider.redrawSlider();
  });

  var $input = $('#payment-form :input:text'),
  $register = $('#finalizeReg');

  $register.attr('disabled', true);
  $input.keyup(function() {
    var trigger = false;
    $input.each(function() {
      if (!$(this).val()) {
        trigger = true;
      }
    });
    trigger ? $register.attr('disabled', true) : $register.removeAttr('disabled');
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
      success: function(data, textStatus, jqXHR){
        var reply = JSON.parse(data);
        var topError;
        if (reply.result == "success")
        {
          registrationSlider.goToSlide(1);
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
        registrationSlider.goToSlide(3);
      }
    });
  });

  $('#contact-form').submit(function(e) {
    var $form = $(this);

    // Disable the submit button to prevent repeated clicks
    $form.find('button').prop('disabled', true);
    var message = $form.serialize();

    $.ajax({
      url: "scripts/mail.php",
      type: "POST",
      data: message,
      success: function(data, textStatus, jqXHR){
        var reply = JSON.parse(data);

        if(reply.result == 'success'){
          contactSlider.goToSlide(1);
        } else {
          contactSlider.goToSlide(2);
        }
      },
      error: function(jqXHR, textStatus, errorThrown){
        contactSlider.goToSlide(2);
      }
    });
    $form.find('button').prop('disabled', false);
    // Prevent the form from submitting with the default action
    return false;
  });

});

$(document).foundation();