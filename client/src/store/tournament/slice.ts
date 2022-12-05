import { createSlice } from "@reduxjs/toolkit";

export interface InitialTournamentState {}

export const initialState: InitialTournamentState = {};

export const gameSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {},
});

export const {} = gameSlice.actions;
export default gameSlice.reducer;
