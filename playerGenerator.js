name = "player_name";
attack = 30;
defense = 10;
hp = 100;

var getMyPlayerRatio = require("./playerUtils");

function playerGenerator(name, attack, defense) {
	var player = {
		name: name,
		attack: attack,
		defense: defense,
		hp : hp,
		displayMyPlayerInfo: function() {
			console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");	
		},

		fight: function(player2) {
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
	}
		return player;
}

module.exports = playerGenerator;

