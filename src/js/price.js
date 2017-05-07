$(document).ready(function(){
    $(".price-tabs__content").first().show()
    // $(".price-tabs__content").hide();
    $(".price-tabs__link").on("click", function(event){
      event.preventDefault()
      $(this).addClass("price-tabs--active")
      .siblings().removeClass("price-tabs--active")
    $($(this.hash)).show()
    	.append ($(this.hash))
      .siblings(".price-tabs__content").hide();
    });
});