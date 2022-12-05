//Size for entire board
const xMin = 1;
const yMin = 1;
const xMax = 25;
const yMax = 13;

//Start position of player 1 and player 2
const xStart = 2;
const yStart = 2;
const player1Start = { x: xStart, y: yStart };
const player2Start = { x: xMax - xStart, y: yMax - yStart };

//Start position of the ball
const ballStart = { x: Math.ceil(xMax / 2), y: Math.ceil(yMax / 2) };

//Possible start directions
const directionsStart = [1, 2, 3, 4];

modules.export = { player1Start, player2Start, ballStart, directionsStart };
