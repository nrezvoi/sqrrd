

var controller = new ScrollMagic.Controller();

var tl1 = new TimelineMax();
tl1.to("#nav-wrap", 1, {width: 145})
.to("#works-fix", 1, {left: -10}, 0)
.to("#nav", 1, {left: 40, transform: "translateX(0)"}, 0)
.to("#nav-ab > .nav-line", 1, {width: "100%"}, 0);

var scene1 = new ScrollMagic.Scene({duration: "100%"})
							.setTween(tl1)
							.addTo(controller);

var tl2 = new TimelineMax();
tl2.to("#nav-ab > .nav-line", 1, {width: 0})
.to("#works-fix > .nav-line", 1, {width: "100%"}, 0);

var scene2 = new ScrollMagic.Scene({duration: "100%", triggerElement: "#trigger1", triggerHook: "onLeave"})
            .setTween(tl2)
            .addTo(controller);

var tl3 = new TimelineMax();
tl3.to("#nav-wrap > a", 1 , {color: "rgb(0, 0, 0)"})
.to(".nav-line", 1, {backgroundColor: "rgb(0,0,0)"}, 0)
.to("#langs > a", 1, {color: "rgb(0, 0, 0)"}, 0)
.to("#langs > a.active", 1, {borderBottomColor: "rgb(0,0,0)"}, 0);

var scene3 = new ScrollMagic.Scene({triggerHook: "onLeave", offset: $(window).height() * 2 - 146, duration: 146})
            .setTween(tl3)
            .addTo(controller);
 
var tl4 = new TimelineMax();
tl4.to("#works-fix > .nav-line", 1, {width: 0})
.to("#nav-contacts > .nav-line", 1, {width: "100%"}, 0);

var scene4 = new ScrollMagic.Scene({duration: "100%", triggerElement: "#trigger2", triggerHook: "onLeave"})
            .setTween(tl4)
            .addTo(controller);

var tl5 = new TimelineMax();
tl5.to("#nav-wrap > a", 1 , {color: "rgb(255, 255, 255)"})
.to(".nav-line", 1, {backgroundColor: "rgb(255, 255, 255)"}, 0)
.to("#langs > a", 1, {color: "rgb(255, 255, 255)"}, 0)
.to("#langs > a.active", 1, {borderBottomColor: "rgb(255, 255, 255)"}, 0);

var scene5 = new ScrollMagic.Scene({triggerHook: "onLeave", offset: $(window).height() * 3 - 146, duration: 146})
            .setTween(tl5)
            .addTo(controller);


//scrolltotop

$(document).on("scroll", function() {
   if ($(document).scrollTop() > $(window).height() * 0.3) {
       $("#scrollTop").css("opacity", 1);
       $("#scrollTop").css("visibility", "visible");
   } else {
       $("#scrollTop").css("opacity", 0);
       $("#scrollTop").css("visibility", "hidden");
   }

   if ($(document).scrollTop() > $(window).height() + 40 && $(document).scrollTop() < $(window).height() * 2 + 40) {
       $("#scrollTop").css("backgroundImage", "url(img/scrolltop_black.png)");
   } else {
       $("#scrollTop").css("backgroundImage", "url(img/scrolltop.png)");
   }

});

 $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
