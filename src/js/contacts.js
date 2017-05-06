$(document).ready(function() {
  $(".contacts__countries").hide();
  $(".contacts__link:eq(0)").on("click", function(event) {
    event.preventDefault();
    $("#fin").show();

  //   $(".modal__close").one("click",function(){
  //       $(this).closest(".modal").hide();
  //     });
    
  //   $(".modal").on("click",function(event){
  //     if($(event.target).hasClass("modal")){
  //        $(this).closest(".modal").hide();
  //     }
  //   });
  // });
  // function closeModal() {
  //   $(this).closest(".modal").hide();
  // }
});