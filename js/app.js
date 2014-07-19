// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready(function(){
  var slider = $('.bxslider').bxSlider({
                                        mode: "fade",
                                        adaptiveHeight: true,
                                        controls: false,
                                        pager: true
                                        });
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
    slider.goToSlide(0);
  });
  $("#residence-link").click(function() {
    slider.goToSlide(1);
  });
  $("#commuter-link").click(function() {
    slider.goToSlide(2);
  });
});

$(document).foundation();