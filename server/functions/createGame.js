import { player1Start, player2Start, ballStart } from '../constants/gameData';
import { getRandomStartDirection } from './createGame';
const createGame = (gameId, player1Id, player2Id) => {
    const game = {
        gameId,
        inGame: false,
        ball: {
            x: ballStart.x,
            y: ballStart.y,
            direction: getRandomStartDirection(),
        },
        players: [
            { playerId: player1Id, x: player1Start.x, y: player2Start.y },
            { playerId: player2Id, x: player2Start.x, y: player2Start.y },
        ],
    };
    return game;
};
