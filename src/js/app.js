$(document).ready(function(){

	$('#form').on('submit', function(e){

		e.preventDefault();

		var newLi = $('#textBox').val();

		$('#uList').append('<li class="h3">' + newLi + '<button type="button" class="btn btn-danger pull-left">' + 'x' + '</button></li>');

		$('#textBox').val('');

		$('#textBox').focus();
	});

	$('#uList').on('click', 'button', function(e){

		e.preventDefault();

		// console.log('clicked');

		$(this).parent().remove();
	});

});
