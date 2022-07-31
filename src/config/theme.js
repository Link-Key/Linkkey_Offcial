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
            fontSize: "18px",
            fontWeight: 400,
            color: "white",
            background: "#FD6262",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              background: "#FD6262cc",
            },
          },
        },
      },
    },
  })
);

export { darkTheme };
