(function () {
	"use strict";

	var $					= require("jquery")
		, mustache	= require("mustache")
		, io 				= require("socket.io-client")
	;

	io().on("update-drink", function (data) {
		var tmpl = $("#drink-tmpl").html()
			, html = mustache.to_html(tmpl, data);
		$("#drink").html(html);
	});

})();
