var express = require('express')
	, menu = express()
;

menu.listen(3000);
menu.use(express.static('menu'));