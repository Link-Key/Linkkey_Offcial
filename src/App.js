import { ThemeProvider } from "@mui/system";
import { darkTheme } from "./config/theme";
import Home from "./pages/home";
import { ScreenContextProvider } from "./provider/screen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ScreenContextProvider>
      <ThemeProvider theme={darkTheme}>
        <Home />
      </ThemeProvider>
      <ToastContainer />
    </ScreenContextProvider>
  );
}

export default App;
