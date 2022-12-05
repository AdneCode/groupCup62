const directionsStart = require('../constants/gameData');
//function to generate a random starting direction
const getRandomStartDirection = () => {
    const direction =
        directionsStart[Math.floor(Math.random() * directionsStart.length)];
    return direction;
};

modules.export = getRandomStartDirection;
