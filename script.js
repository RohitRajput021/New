// Smooth scrolling for navigation links
$(document).ready(function () {
    $(".menu-items a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  });
  
  // Animated skill bars
  $(document).ready(function () {
    $(window).scroll(function () {
      $(".html").animate({
        width: "90%"
      }, 2000);
      $(".css").animate({
        width: "80%"
      }, 2000);
      $(".bootstrap").animate({
        width: "85%"
      }, 2000);
      $(".javascript").animate({
        width: "70%"
      }, 2000);
      $(".c").animate({
        width: "60%"
      }, 2000);
    });
  });
  
  // Show/Hide navigation menu on small screens
  $(document).ready(function () {
    $(".menu-icon").click(function () {
      $(".menu-items").slideToggle();
    });
  });
  