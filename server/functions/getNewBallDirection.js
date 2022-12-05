//function to determine the new position of the ball when either an edge or a player is hit
const getNewBallDirection = (oldDirection, isEdge) => {
    if (!isEdge) {
        if (oldDirection === 1) return 4;
        if (oldDirection === 2) return 3;
        if (oldDirection === 3) return 2;
        if (oldDirection === 4) return 1;
    }
    if (isEdge) {
        if (oldDirection === 1) return 2;
        if (oldDirection === 2) return 1;
        if (oldDirection === 3) return 4;
        if (oldDirection === 4) return 3;
    }
};
