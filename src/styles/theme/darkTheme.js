// import { createTheme, responsiveFontSizes } from "@mui/material";
// import globalTheme from "./globalTheme";

// let darkTheme = createTheme({
//   ...globalTheme("dark"),
//   palette: {
//     mode: "dark",
//     ...globalTheme("dark").palette,
//     background: {
//       default: "#141414",
//     },
//   },
// });

// darkTheme = responsiveFontSizes(darkTheme);

// export default darkTheme;
import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#141414",
    },
    text: {
      primary: "#fff",
    },
  },
});
