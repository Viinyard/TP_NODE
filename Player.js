/*var getMyPlayerRatio = require("./playerUtils");


function Player(name, attack, defense) {
	this.name = name;
	this.defense = defense;
	this.attack = attack;
	this.hp = 100;
}

Player.prototype.displayMyPlayerInfo = function() {
			console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");	
		};
Player.prototype.fight = function(player2) {
			var	v1 = getMyPlayerRatio(this, player2.defense);
			var	v2 = getMyPlayerRatio(player2, this.defense);
	
			if(v1 > v2) {
				this.hp -= v2 * Math.floor(player2.hp / v1);
				player2.hp = 0;
				console.log("The winner is " + this.name + " !");
				this.displayMyPlayerInfo();
			} else {
				player2.hp -= v1 * Math.floor(this.hp / v2);
				this.hp = 0;
				console.log("The winner is " + player2.name + " !");
				player2.displayMyPlayerInfo();
			}
		}



function PayToWinPlayer(name, attack, defense) {
	Player.call(this, name, attack * 1.4, defense);
}

PayToWinPlayer.prototype = Object.create(Player.prototype);

module.exports.Player = Player;
module.exports.PayToWinPlayer = PayToWinPlayer;*/

var getMyPlayerRatio = require("./playerUtils");

var RandomOrg = require('random-org');
 
var random = new RandomOrg({ apiKey: 'bcf88b78-921d-4d41-8418-c417d26546be' });
function randomNumber() {
	 return random.generateIntegers({ min: 1, max: 100, n: 1 }).then(
		function(result) {
			return random.generateIntegers({min: 1, max: 100, n: result.random.data[0] }).then(
				function(result) {
					return result.random.data.filter(
						function(value) {
							return value < 10;
						}).map(function(value, index) {
							return index == value ? value * 2 : value;
						}).reduce(function(accumulator, value) {
							return accumulator + (value / 100)
						}, 0);
						
				})
		}).catch(function(error) {
			console.log(error);
		}).catch(function(error) {
			console.log(error);
		});
};

class Player {
	constructor(name, attack, defense) {
		this.name = name;
		this.attack = attack;
		this.defense = defense;
		this.hp = 100;
	}

	displayMyPlayerInfo() {
		console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");	
	}

	async fight(player2) {
		var	v1 = getMyPlayerRatio(this, player2.defense) + await randomNumber();
		var	v2 = getMyPlayerRatio(player2, this.defense) + await randomNumber();

		if(v1 > v2) {
			this.hp -= v2 * Math.floor(player2.hp / v1);
			player2.hp = 0;
			console.log("The winner is " + this.name + " !");
			this.displayMyPlayerInfo();
		} else {
			player2.hp -= v1 * Math.floor(this.hp / v2);
			this.hp = 0;
			console.log("The winner is " + player2.name + " !");
			player2.displayMyPlayerInfo();
		}
	}
}

class PayToWinPlayer extends Player {
	constructor(name, attack, defense) {
		super(name, attack * 1.4, defense);
	}
}

module.exports.Player = Player;
module.exports.PayToWinPlayer = PayToWinPlayer;



