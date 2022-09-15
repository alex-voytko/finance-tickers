import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkModeOn: false,
  },
  reducers: {
    onToggle: (_, { payload }) => ({
      isDarkModeOn: payload,
    }),
  },
});

export const { onToggle } = themeSlice.actions;

export default themeSlice.reducer;
