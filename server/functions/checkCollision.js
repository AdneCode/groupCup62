import { xMin, yMin, xMax, yMax } from '../constants/gameData';
//checks whether the ball is hitting an edge, a player or not hitting anything at all
//returns "edge" when colliding with a wall, "player" when colliding with a player
const checkCollision = (ball, player1, player2) => {
    //Calculate the new position of the ball
    const newBall = getNewBallPosition(ball);

    //Check whether the new position is a wall or not
    if (newBall.y === yMin && (ball.direction === 1 || ball.direction === 4)) {
        return 'edge';
    }
    if (newBall.y === yMax && (ball.direction === 2 || ball.direction === 3)) {
        return 'edge';
        // getNewBallDirection(ball.direction, true);
    }
};
