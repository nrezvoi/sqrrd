var controller = new ScrollMagic.Controller();

var tl1 = new TimelineMax();
tl1.to("#nav-wrap", 1, { width: 145 })
  .to("#works-fix", 1, { left: -10 }, 0)
  .to("#nav", 1, { left: 40, transform: "translateX(0)" }, 0);
/*.to("#nav-ab > .nav-line", 1, {width: "100%"}, 0);*/

var scene1 = new ScrollMagic.Scene({ duration: "100%" })
  .setTween(tl1)
  .addTo(controller);

//scrolltotop

var flag = false;

$(document).on("scroll", function () {
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

  //navbar

  //first
  if ($(document).scrollTop() >= $(window).height() - 110 &&
    $(document).scrollTop() < $(window).height() * 2 - 110) {

    if (!flag) {
      $("#nav-wrap").fadeOut(100);
      flag = true;
      $("#nav-coll").fadeIn(100);
    }

    // $("header").css('background-color', "#4a3372");

    TweenMax.to("header", 0.1, { backgroundColor: "#4a3372" });
    $("#nav-icon").css("backgroundImage", "url(img/menu_icon.png)");
    $("#langs > a").css("color", "#fff");
    $("#langs > a.active").css("border-bottom-color", "#fff");

    //second
  } else if ($(document).scrollTop() >= $(window).height() * 2 - 110 &&
  $(document).scrollTop() < $(window).height() * 3 - 110) {

    if (!flag) {
      $("#nav-wrap").fadeOut(100);
      flag = true;
      $("#nav-coll").fadeIn(100);
    }

    TweenMax.to("header", 0.1, { backgroundColor: "#ffef91" });
    $("#nav-icon").css("backgroundImage", "url(img/menu_icon_black.png)");
    $("#langs > a").css("color", "#000");
    $("#langs > a.active").css("border-bottom-color", "#000");

//third
  } else if ($(document).scrollTop() >= $(window).height() * 3 - 110 )  {
    $("#nav-icon").css("backgroundImage", "url(img/menu_icon.png)");
    TweenMax.to("header", 0.1, { backgroundColor: "#c9326d" });
    $("#langs > a").css("color", "#fff");
    $("#langs > a.active").css("border-bottom-color", "#fff");
//top
  } else {
    if (flag) {
      $("#nav-wrap").fadeIn(100);
      flag = false;
      $("#nav-coll").fadeOut(100);
    }

    TweenMax.to("header", 0.1, { backgroundColor: "rgba(74,51,114,0)" });
  }

});

$("a").on('click', function (event) {

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
    }, 1000, function () {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});
