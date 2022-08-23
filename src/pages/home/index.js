import { Box, useTheme } from "@mui/material";
import Preface from "./Preface";
import { useScreen } from "../../provider/screen";
import Header from "../../components/Header";
import SocialProtocol from "./SocialProtocol";
import ProtocolData from "./ProtocolData";
import TokenOmic from "./TokenOmic";
import TryProduct from "./TryProduct";
import DAO from "./DAO";
import Cooperator from "./Cooperator";
import Footer from "../../components/Footer";

const Home = () => {
  const theme = useTheme();
  console.log("theme:", theme);
  const screen = useScreen();
  console.log("screen:", screen);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Header />
      <Preface />
      <SocialProtocol />
      <ProtocolData />
      <TokenOmic />
      <TryProduct />
      <DAO />
      <Cooperator />

      <Footer />
    </Box>
  );
};

export default Home;
