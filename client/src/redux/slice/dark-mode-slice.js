import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkModeOn: false,
  },
  reducers: {
    onToggle: (_, action) => ({
      isDarkModeOn: action.payload,
    }),
  },
});

export const { onToggle } = darkModeSlice.actions;

export default darkModeSlice.reducer;
