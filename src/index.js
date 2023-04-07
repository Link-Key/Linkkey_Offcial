import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "inter-ui/inter.css";
import { ScreenContextProvider } from "./provider/screen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { darkTheme } from "./config/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScreenContextProvider>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    <ToastContainer />
  </ScreenContextProvider>
);
