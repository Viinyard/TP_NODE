function getMyPlayerRatio(player, nb) {
	return (player.attack - nb) < 0 ? 0 : player.attack - nb;
}


module.exports = getMyPlayerRatio;
