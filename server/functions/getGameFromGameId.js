const getGameFromGameId = (gameId, games) => {
    return games.find((i) => i.gameId === gameId);
};

modules.export = getGameFromGameId;
