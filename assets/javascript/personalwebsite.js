console.log("hello")

var typed = new Typed('.element', {
  strings: ["Software Engineer", "Web Developer", "Android Developer", "UI/UX Designer"],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true, loopCount: Infinity,
  shuffle: true

});


// BOLDS THE HEADING WHEN HOVERED OVER FARAZ KHALID AND BACK TO NORMAL AFTER IT IS HOVER OUT

$(".firstheading").hover(
	function () {
	$(this).css({
			"fontWeight": "bold",
		});
	}, 
	function () {
	$(this).css("fontWeight", "normal")
	}
);



$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });