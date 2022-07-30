import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const darkTheme = responsiveFontSizes(
  createTheme({
    typography: {
      allVariants: {
        fontWeight: 400,
        fontFamily: "Inter",
      },
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#FD6262",
        contrastText: "white",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            fontWeight: 800,
            color: "white",
            borderRadius: "40px",
            textTransform: "none",
          },
        },
      },
    },
  })
);

export { darkTheme };
