import { createSlice } from "@reduxjs/toolkit";

export type Ball = {
  x: number;
  y: number;
  direction: number;
};

export type Players = {
  playerId: number;
  x: number;
  y: number;
};

export interface Game {
  gameId: number;
  gameState: string;
  ball: Ball;
  players: Players[];
}

export interface InitialGameState {
  game: Game | null;
}

const initialState: InitialGameState = {
  game: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

export const {} = gameSlice.actions;
export default gameSlice.reducer;
