// import { createTheme, responsiveFontSizes } from "@mui/material";
// import globalTheme from "./globalTheme";

// let lightTheme = createTheme({
//   ...globalTheme("light"),
//   palette: {
//     mode: "light",
//     ...globalTheme("light").palette,
//     background: {
//       default: "#ffff",
//     },
//   },
// });

// lightTheme = responsiveFontSizes(lightTheme);

// export default lightTheme;

import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#11111",
    },
  },
});