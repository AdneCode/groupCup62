//function to calculate the new ball position, when the ball is not colliding
const getNewBallPosition = (ball) => {
    if (ball.direction === 1)
        return { ...ball.direction, x: ball.x + 1, y: ball.y - 1 };
    if (ball.direction === 2)
        return { ...ball.direction, x: ball.x + 1, y: ball.y + 1 };
    if (ball.direction === 3)
        return { ...ball.direction, x: ball.x - 1, y: ball.y + 1 };
    if (ball.direction === 4)
        return { ...ball.direction, x: ball.x - 1, y: ball.y - 1 };
};
