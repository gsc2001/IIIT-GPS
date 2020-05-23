var SECRET_KEY = 'gpscourses'
var KEY_YEAR = 'gpsyear'
var KEY_COURSE = 'gpscourse'
//  Smooth scroll
$("a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

// Nav bar icon change
$(".navbar-toggler").on("click", function (event) {
  $(".close").toggleClass("hidden");
  $(".navbar-toggler-icon").toggleClass("hidden");
});