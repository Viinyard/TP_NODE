//var playerGenerator = require('./playerGenerator.js');
var fight = require('./playerUtils.js');
var Player = require('./Player.js');
var request = require('request');

/*var player1 = playerGenerator("Soldat", 20, 8);
var player2 = playerGenerator("Ennemi", 12, 5);*/

var player1 = new Player.Player("Soldat", 20, 8);
var player2 = new Player.Player("Ennemi", 12, 5);

var ptwPlayer = new Player.PayToWinPlayer("PTW", 30, 20);

player1.displayMyPlayerInfo();
player2.displayMyPlayerInfo();



/*request.post({url:'https://api.random.org/json-rpc/1/invoke', form: {
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
        "apiKey": "bcf88b78-921d-4d41-8418-c417d26546be",
        "n": 10,
        "min": 1,
        "max": 100,
        "replacement": true
    },
    "id": 42
	}}, 
function(err,httpResponse,body){ 
	if(err) {
		console.log("erreur");
	} else {
		console.log(httpResponse);
	}

});*/


ptwPlayer.fight(player2);

