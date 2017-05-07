$(document).ready(function(){
    
    $(".price-tabs__content").hide();
    $(".price-tabs__link").on("click", function(event){
      event.preventDefault()
    $($(this.hash)).show()
    	.append ($(this.hash))
      .siblings(".price-tabs__content").hide();
    });
});