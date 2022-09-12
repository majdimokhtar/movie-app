import { CssBaseline, ThemeProvider } from "@mui/material";
import RouterConfig from "./routing/RouterConfig";
import { darkTheme } from "./styles/theme/darkTheme"
import { lightTheme } from "./styles/theme/lightTheme"
import { useSelector } from "react-redux";
import "styles/globalStyles.css";

function App() {

  const theme = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterConfig />
    </ThemeProvider>
  );
}


export default App;
