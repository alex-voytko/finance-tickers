import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkModeOn: false,
  },
  reducers: {
    onToggle: (_, action) => ({
      isDarkModeOn: action.payload,
    }),
  },
});

export const { onToggle } = themeSlice.actions;

export default themeSlice.reducer;
