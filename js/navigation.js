// hamburger is initially gone in case user has disabled JS
var $hamburger = $("header .hamburger");
$hamburger.removeClass("is-gone");

var $header = $("header");
var $nav = $("header nav");
var $shadow = $("header .shadow");

// whenever the header is clicked, activate the hamburger, nav
// and its link items, and the shadow of the whole header
$header.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  $nav.toggleClass("is-active");
  $shadow.toggleClass("is-active");
});
