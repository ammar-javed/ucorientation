var galleryLoaded;
$(document).ready(function() {

	$(window).scroll(function(event) {
		if (!galleryLoaded){
			if ($("#gallery").offset().top < $(window).scrollTop() + $(window).outerHeight())
			{
				for (var i = 1; i < 15; i++)
				{
					$(".gallery").append('<li><img style="margin:auto;width:80%;height:80%;" src="images/gallery/'+i+'.png" /></li>');
					gallery.reloadSlider();
				}
				galleryLoaded = true;
			}
		}
	});

});