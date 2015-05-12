(function() {
	'use strict';
	
	var $ = require('jquery')
		, Mustache = require('mustache')
		, io = require('socket.io-client')
		, socket = io()
	;
	
	$.getJSON('assets/json/drinks.json', function(data) {
		var tmpl = $('#drinks-tmpl').html()
			, html = Mustache.to_html(tmpl, data);
		$('#drinks').html(html);
	});
	
	$('#drinks').on('click', 'button', function() {
		var button = $(this)
			, drinkId = button.data('drinkId');
		socket.emit('set-drink', drinkId);
	})
	
})();