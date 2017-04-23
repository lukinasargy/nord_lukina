$(document).ready(function() {
        $('.toggle-nav').click(function(event) {
          $(this).toggleClass('active');
          $('.menu ul').toggleClass('active');

          event.preventDefault();
        });
      });