import { createTheme, responsiveFontSizes } from "@mui/material";
import globalTheme from "./globalTheme";

let darkTheme = createTheme({
  ...globalTheme("dark"),
  palette: {
    mode: "dark",
    ...globalTheme("dark").palette,
    background: {
      default: "#141414",
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
