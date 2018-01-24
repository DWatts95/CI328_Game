window.onload = function() {
	let game = new Phaser.Game(1000, 750, Phaser.AUTO);

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	

	game.state.add("Level", Level);
	
	game.state.start("Level");
};

