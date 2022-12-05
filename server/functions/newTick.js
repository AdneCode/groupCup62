const newTick = (games) => {
    //every tick, all games are updated with the updateGame function
    const newGames = games.map((i) => {
        updateGame(i);
    });
    return newGames;
};
