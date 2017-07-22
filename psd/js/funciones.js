$(document).ready(function(){

    
    $("[data-toggle=tooltip]").tooltip();
});










jQuery(document).ready(function(){
	jQuery("li.item-pestana").click(function(){
	var indicador = jQuery(this).index();
	if(!jQuery(this).hasClass("activado"))
	{
		jQuery("li.item-pestana").removeClass("activado");
		jQuery(this).addClass("activado");
	}
	jQuery(".contenido-item-pestana").removeClass("activado")
	jQuery(".contenido-item-pestana").eq(indicador).addClass("activado");
	})

});