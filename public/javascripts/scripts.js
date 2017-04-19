$( document ).ready(function() {



	$(window).on('load', function() {
		$.ajax({
			url : 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json',
			type : 'POST',
			dataType: 'json',
			crossDomain: true,
			contentType: "application/json",

			success : function(){
				var superHeroes = request.response
				var $tituloHerois = $('.conteudo h1');
				$tituloHerois.text(superheroes['squadName'])

			},

			error : function(request,error)
			{
				alert("Request: "+JSON.stringify(request));
			}
		});
	});




});


