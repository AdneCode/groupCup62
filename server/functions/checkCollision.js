import { xMin, yMin, xMax, yMax } from '../constants/gameData';
import { getNewBallPosition } from '.';
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

    if (newBall.x === player1.x || newBall.x === player2.x) {
        //If the new position of the ball is exactly the same as the position of the player at this moment
        if (
            newBall.y === player1.y ||
            (ball.direction === 3 && newBall.y - 1 === player1.y) ||
            (ball.direction === 4 && newBall.y + 1 === player1.y) ||
            newBall.y === player2.y ||
            (ball.direction === 1 && newBall.y + 1 === player2.y) ||
            (ball.direction === 2 && newBall.y - 1 === player2.y)
        ) {
            return 'player';
        }
    }
    //If nothing is in the way, we return false
    return false;
};
