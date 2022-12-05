import { directionsStart } from '../constants/gameData';

const getRandomStartDirection = () => {
    const direction =
        directionsStart[Math.floor(Math.random() * directionsStart.length)];
    return direction;
};

export { getRandomStartDirection };
