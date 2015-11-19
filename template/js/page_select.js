$(document).ready(function() {
	
	$("#v1").click(function() {
		var c = $('#v1').attr('name');
		$('#view').load(c);
	});
	
	$("#v2").click(function() {
		var c = $('#v2').attr('name');
		$('#view').load(c);
	});
});