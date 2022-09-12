// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   mode: "browser", // browser || light || dark
// };

// const themeSlice = createSlice({
//   name: "theme",
//   initialState,
//   reducers: {
//     setThemeMode: (state, action) => {
//       state.mode = action.payload;
//     },
//   },
// });

// export const { setDarkMode, setThemeMode } = themeSlice.actions;

// export default themeSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
