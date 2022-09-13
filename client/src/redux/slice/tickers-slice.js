import { createSlice } from "@reduxjs/toolkit";

const tickerSlice = createSlice({
  name: "tickers",
  initialState: {
    items: [[], []],
    showSelecting: false,
    markedItems: [],
  },
  reducers: {
    fetch(state, { payload }) {
      state.items.unshift(payload);
      if (state.items.length >= 3) state.items.pop();
    },
    onSelect(state, _) {
      state.showSelecting = !state.showSelecting;
    },
    setMarkedItems(state, { payload }) {
      const i = state.markedItems.indexOf(payload);
      if (i < 0) state.markedItems.push(payload);
      else state.markedItems.splice(i, 1);
    },
  },
});

export const { fetch, onSelect, setMarkedItems } = tickerSlice.actions;

export default tickerSlice.reducer;
