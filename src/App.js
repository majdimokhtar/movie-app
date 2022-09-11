import { CssBaseline, ThemeProvider } from "@mui/material";
import RouterConfig from "./routing/RouterConfig";
import { darkTheme } from "./styles/theme/darkTheme"
import { lightTheme } from "./styles/theme/lightTheme"
import { useSelector } from "react-redux";
import "styles/globalStyles.css";

function App() {
  // const { mode } = useSelector((state) => state.theme);

  const theme = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterConfig />
    </ThemeProvider>
  );
}

// export const handleTheme = (mode) => {
//   switch (mode) {
//     case "light":
//       return lightTheme;
//     case "dark":
//       return darkTheme;
//     case "browser":
//       return window.matchMedia &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? darkTheme
//         : lightTheme;

//     default:
//       return darkTheme;
//   }
// };

export default App;
