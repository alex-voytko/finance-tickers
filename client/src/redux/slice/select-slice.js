import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
  name: "select",
  initialState: {
    showSelecting: false,
    markedItems: [],
  },
  reducers: {
    onSelect(state, _) {
      state.showSelecting = !state.showSelecting;
      if (!state.showSelecting) state.markedItems = [];
    },
    setMarkedItems(state, { payload }) {
      if (payload === null) {
        state.markedItems.length = 0;
        return;
      }
      const i = state.markedItems.findIndex(
        (ticker) => ticker.index === payload.index
      );
      if (i < 0) state.markedItems.push(payload);
      else state.markedItems.splice(i, 1);
    },
  },
});

export const { onSelect, setMarkedItems } = selectSlice.actions;

export default selectSlice.reducer;
