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

  if ($(document).scrollTop() >= $(window).height() * 2 - 24 &&
    $(document).scrollTop() < $(window).height() * 3 - 24) {

    $("#langs > a, #open-menu").css("color", "#000");
    $(".bottom-line").css("backgroundColor", "#000");

    //third
  } else {
    $("#langs > a, #open-menu").css("color", "#fff");
    $(".bottom-line").css("backgroundColor", "#fff")
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
    }, 1000, function() {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

$(".overlay-hugeinc").bind('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
  if ($(".overlay-hugeinc").hasClass('close')) {
    $(".overlay-hugeinc").removeClass('close');
    return;
  }

  return;
});

$("#open-menu").click(function() {
  $(".overlay-hugeinc").addClass("open");
  $("html,body").css("overflow", "hidden");
});

$(".close-menu").click(function() {
  $(".overlay-hugeinc").removeClass("open");
  $(".overlay-hugeinc").addClass("close");
  $("html,body").css("overflow", "visible");
});