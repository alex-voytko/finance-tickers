import { createSlice } from "@reduxjs/toolkit";

const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    deletedItems: [],
  },
  reducers: {
    onDelete(state, { payload }) {
      if (payload === null) {
        state.deletedItems.length = 0;
        return;
      }
      state.deletedItems.push(...payload);
    },
  },
});

export const { onDelete } = deleteSlice.actions;

export default deleteSlice.reducer;
