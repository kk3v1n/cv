$(document).ready(function() {
  $('.navbar-section').fadeOut();
  $('.intro-section').fadeOut();
  $(".navbar-section").fadeIn("slow");
  $(".intro-section").fadeIn(2500);
  $('#about-me-section').fadeOut();
  $('#work-experience-section').fadeOut();
  $('#projects-section').fadeOut();
  $('#skills-section').fadeOut();
  $('#contact-section').fadeOut();
  $('#footer-section').fadeOut();
});


$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $("#about-me-section").removeClass("temp-hide");
      $('#about-me-section').fadeIn();
      // $(".about-me-section").css('visibility', 'visible');
    }

    if(y > 1000){
      $("#work-experience-section").removeClass("temp-hide")
      $('#work-experience-section').fadeIn();
    }

    if(y > 1800){
      $("#projects-section").removeClass("temp-hide")
      $('#projects-section').fadeIn();
    }
    if(y > 2600){
      $("#skills-section").removeClass("temp-hide")
      $('#skills-section').fadeIn();
    }
    if(y > 3000){
      $("#contact-section").removeClass("temp-hide")
      $('#contact-section').fadeIn();
    }
    if(y > 3200){
      $("#footer-section").removeClass("temp-hide")
      $('#footer-section').fadeIn();
    }

  });
