
var ww = $(window).width();
var wh = $(window).height();

$(document).ready(function() {
	$('#loader').hide();
	$('#pantallaInicial').width(ww).height(wh);

	$('#imgBienvenida').width(ww).height(wh);
	
	console.log(ww)


})	

$(window).on('resize', function(){
	ww = $(window).width();
	wh = $(window).height();
	$('#pantallaInicial').height(wh).width(ww);
	$('#imgBienvenida').width(ww).height(wh);
})


// $(document).ready(function() {
// 	    $('.parallax').parallax();
// 	    $('.slider').slider({ indicators:false});
// 	    $('.carousel').carousel();
// 		$(".dropdown-button").dropdown();
// 		$(".button-collapse").sideNav();
// 	setTimeout(function(){
// 		$('body').addClass('loaded');
// 		$('h1').css('color','#222222');
// 	}, 3000);

// 	var alto = $('#capaefectos').height();


// 	$(document).scroll(function() {
		

// 		if ($(document).scrollTop() > alto) {
// 			$('#capaefectos').animate({
// 				top: -alto
// 			})
// 			$("#capaefectos").hide("slow");
// 		}
// 	})


// 	$("#ocultar").on('click', function(event){
// 	 	 event.preventDefault();

// 	 	$('#capaefectos').animate({
// 				top: -alto
// 		},1000)
// 		$("#capaefectos").hide("slow");
// 	});
 
// });



	