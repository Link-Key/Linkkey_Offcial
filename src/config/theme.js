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
        main: "#ea6060",
        contrastText: "white",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "18px",
            fontWeight: 400,
            color: "white",
            background: "#ea6060",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              background: "#ea6060cc",
            },
          },
        },
      },
    },
  })
);

export { darkTheme };
