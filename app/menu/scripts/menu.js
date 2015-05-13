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

})();
