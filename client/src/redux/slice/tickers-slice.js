import { createSlice } from "@reduxjs/toolkit";

const tickerSlice = createSlice({
  name: "tickers",
  initialState: {
    items: [[], []],
    isStopped: false,
  },
  reducers: {
    fetch(state, { payload }) {
      state.items.unshift(payload);
      if (state.items.length >= 3) state.items.pop();
    },
    setPerforming(state, _) {
      state.isStopped = !state.isStopped;
    },
  },
});

export const { fetch, setPerforming } = tickerSlice.actions;

export default tickerSlice.reducer;
