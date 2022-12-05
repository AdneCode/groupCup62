const updatePlayerPosition = (playerId, direction, game) => {
    const returnedGame = game;
    if (game.player1.playerId === playerId) {
        if (direction === 1) {
            returnedGame.player1.x = game.player1.x + 1;
        }
        if (direction === 2) {
            returnedGame.player1.y = game.player1.y + 1;
        }
        if (direction === 3) {
            returnedGame.player1.x = game.player1.x - 1;
        }
        if (direction === 4) {
            returnedGame.player1.y = game.player1.y - 1;
        }
    }
    if (game.player2.playerId === playerId) {
        if (direction === 1) {
            returnedGame.player2.x = game.player2.x + 1;
        }
        if (direction === 2) {
            returnedGame.player2.y = game.player2.y + 1;
        }
        if (direction === 3) {
            returnedGame.player2.x = game.player2.x - 1;
        }
        if (direction === 4) {
            returnedGame.player2.y = game.player2.y - 1;
        }
    }
    return returnedGame;
};
