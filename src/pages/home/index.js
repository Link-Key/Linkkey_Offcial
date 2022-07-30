import { Box, useTheme } from "@mui/material";
import Preface from "./Preface";
import { useScreen } from "../../provider/screen";
import Header from "../../components/Header";

const Home = () => {
  const theme = useTheme();
  console.log("theme:", theme);
  const screen = useScreen();
  console.log("screen:", screen);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        // background: 'black'
      }}
    >
      <Header />
      <Preface />
    </Box>
  );
};

export default Home;
