//function to determine the new position of the ball when either an edge or a player is hit
const getNewBallDirection = (oldDirection, collision) => {
    if (!collision) {
        return oldDirection;
    }
    if (collision === 'edge') {
        if (oldDirection === 1) return 2;
        if (oldDirection === 2) return 1;
        if (oldDirection === 3) return 4;
        if (oldDirection === 4) return 3;
    }
    if (collision === 'player') {
        if (oldDirection === 1) return 4;
        if (oldDirection === 2) return 3;
        if (oldDirection === 3) return 2;
        if (oldDirection === 4) return 1;
    }
};

modules.export = getNewBallDirection;
