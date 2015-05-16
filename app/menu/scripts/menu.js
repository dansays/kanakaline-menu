(function () {
	"use strict";

	var $					= require("jquery")
		, mustache	= require("mustache")
		, io 				= require("socket.io-client")
	;
	
	var socket = io();
	
	if (localStorage.lastDrink) {
		socket.emit("set-drink", localStorage.lastDrink);
	}

	socket.on("update-drink", function (data) {
		var tmpl = $("#drink-tmpl").html()
			, html = mustache.to_html(tmpl, data);
		$("#drink").html(html);
		localStorage.lastDrink = data.id;
	});

	socket.on("update-volume", function (volumeLevel) {
		$("video").prop("volume", volumeLevel / 100);
	});
	
	$.getJSON("/controller/json/drinks.json", function(data) {
		var tmpl = $("#message-tmpl").html()
			, html = mustache.to_html(tmpl, data.message);
		$("#message").html(html);
	});

})();
