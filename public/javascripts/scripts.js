$( document ).ready(function() {



	// $(window).on('load', function() {

	//     $.ajax({
	//         url : 'https://jsonplaceholder.typicode.com/posts/1',
	//         type : 'GET',
	//         dataType: 'json',
	//         contentType: "application/json",

	//        success : function(data){
	//             headerSobreHerois(data);

	//        },

	//        error : function(request,error) {
	//             alert("Request: "+JSON.stringify(request));
	//         }
	//     });
	// });

});





	function headerSobreHerois(data) {
		var myH1 = $('<h1></h1>');
		var myH2 = $('<h2></h2>');
		myH1.text(data['title']);
		myH2.text(data['title']);
		$('.lista-herois .conteudo').append(myH1);
		$('.lista-herois .conteudo').append(myH2);
	}


