$(document).ready(function() {

	$('#submit_country').on('click', function(){
		if (($('#user_country').val() == 'France') || ($('#user_country').val() == 'france')){
			$('#candy').show();
			$('#country').hide();
			$('#message').hide();
		} else {
			$('#country').show();
			$('#message').show();
		}
	})

	$('#user_candy_fan').on('click', function(){
		if ($('#user_candy_fan').is(':checked')){
			$('#submit_candy').hide();
			$('#submit_final').show();
		}	else {
			$('#submit_candy').show();
			$('#submit_final').hide();
		}
	})

	$('#submit_candy').on('click', function(){
		if ($('#user_candy_fan').is(':checked')){
			$('#candy').hide();
			$('#submit_final').show();
		} else {
			$('#candy').hide();
			$('#nightclub').show();
		}
	})

	$('#user_night_club_fan').on('click', function(){
		if ($('#user_night_club_fan').is(':checked')){
			$('#submit_nightclub').hide();
			$('#submit_final').show();
		}	else {
			$('#submit_nightclub').show();
			$('#submit_final').hide();
		}
	})

	$('#submit_nightclub').on('click', function(){
		if ($('#user_night_club_fan').is(':checked')){
			$('#nightclub').hide();
			$('#submit_final').show();
		} else {
			$('#nightclub').hide();
			$('#fan').show();
			$('#submit_final').show();
		}
	})

	$('form').on('keyup keypress', function(e) {
  	var keyCode = e.keyCode;
  	if (keyCode === 13) { 
    	e.preventDefault();
    return false;
  	}
	});
});