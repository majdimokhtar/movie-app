import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "browser", // browser || light || dark
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setDarkMode, setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
