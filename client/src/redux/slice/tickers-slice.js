import { createSlice } from "@reduxjs/toolkit";

const tickerSlice = createSlice({
  name: "tickers",
  initialState: {
    items: [[], []],
  },
  reducers: {
    fetch(state, { payload }) {
      state.items.unshift(payload);
      if (state.items.length >= 3) state.items.pop();
    },
  },
});

export const { fetch } = tickerSlice.actions;

export default tickerSlice.reducer;
