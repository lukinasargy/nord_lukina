$(document).ready(function() {
  $("#link:eq(0)").on("click", function(event) {
    event.preventDefault();
    $(".manager:eq(0)").show();
    $(".contacts__countries").show();
  });

  $("#link:eq(1)").one("click", function(event) {
    event.preventDefault();
    $(".contacts__countries").show(); 
    $(".manager:eq(1)").show();
  });

  $("#link:eq(2)").on("click", function(event) {
    event.preventDefault();
    $(".contacts__countries").show(); 
    $(".manager:eq(2)").show();
  });
  $("#link:eq(3)").on("click", function(event) {
    event.preventDefault();
    $(".contacts__countries").show(); 
    $(".manager:eq(3)").show();
     });
  $("#link:eq(4)").on("click", function(event) {
    event.preventDefault();
    $(".contacts__countries").show(); 
    $(".manager:eq(4)").show();
     });
  $("#link:eq(5)").on("click", function(event) {
    event.preventDefault();
    $(".contacts__countries").show(); 
    $(".manager:eq(5)").show();
     });

  $(".manager__close").on("click",function(){
        $(this).closest(".contacts__countries").hide();
      });
    
    $(".contacts__countries").on("click",function(event){
      if($(event.target).hasClass("contacts__countries")){
         $(this).closest(".contacts__countries").hide();
      }
    });
  function closeModal() {
    $(this).closest(".manager").hide();
  }
});