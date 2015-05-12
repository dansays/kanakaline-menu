var express		= require('express')
	, app				= express()
	, http			= require('http').Server(app)
	, io 				= require('socket.io')(http)
	, drinks		= require('./controller/assets/json/drinks.json').drinks
;

http.listen(3000);

app.use('/menu', express.static('menu'));
app.use('/controller', express.static('controller'));

app.get('/drink/:id', function(req, res) {
	setDrink(req.params.id);
	res.send('okay');
});

io.on('connection', function(socket) {
	console.log('A user connected');
	socket.on('set-drink', setDrink);
});


function setDrink(id) {
	
	drinks.forEach(function(drink) {
		if (drink.id != id) return;
		console.log('New Drink: ' + drink.name);
		io.sockets.emit('update-drink', drink);
	});
	
}
