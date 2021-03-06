(function () {
	"use strict";

	var $					= require("jquery")
		, mustache	= require("mustache")
		, io				= require("socket.io-client")
	;

	var socket = io();

	$.getJSON("json/drinks.json", function (data) {
		var tmpl = $("#drinks-tmpl").html()
			, html = mustache.to_html(tmpl, data);
		$("#drinks").html(html);
	});

	$("#drinks").on("click", "button", function () {
		var button = $(this)
			, drinkId = button.data("drinkId");
		socket.emit("set-drink", drinkId);
	});

	$("#volume input").on("change", function () {
		var volumeLevel = $(this).val();
		socket.emit("set-volume", volumeLevel);
	});

})();
