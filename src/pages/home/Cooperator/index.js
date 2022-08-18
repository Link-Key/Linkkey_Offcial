import { Box, Container, styled, Typography } from "@mui/material";
import polygon from "../../../assets/images/cooperator/polygon.jpg";
import opensea from "../../../assets/images/cooperator/opensea.png";
import rarible from "../../../assets/images/cooperator/rarible.png";
import aragon from "../../../assets/images/cooperator/aragon.png";
import xmtp from "../../../assets/images/cooperator/xmtp.png";
import solid from "../../../assets/images/cooperator/solid.png";
import kava from "../../../assets/images/cooperator/kava.png";
import filecoin from "../../../assets/images/cooperator/filecoin.png";
import lens from "../../../assets/images/cooperator/lens.png";
import relation from "../../../assets/images/cooperator/relation.png";

const CooperatorBoxItem = styled(Box)(() => ({
  width: "170px",
  height: "100px",
  borderRadius: "10px",
  border: "1px solid rgba(187, 187, 187, 100)",
  fontSize: "20px",
  color: "#9a9a9a",
  fontWeight: 500,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",

  img: {
    width: "40px",
    // filter: "grayscale(1)",
  },
  svg: {
    width: "40px",
    height: "40px",
    // filter: "grayscale(1)",
  },
}));

const Cooperator = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "132px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#ea6060",
            fontSize: { xs: "35px", md: "58px" },
            fontWeight: 700,
            marginTop: "12px",
          }}
        >
          COOPERATOR
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#9A9A9A",
            fontSize: { xs: "15px", md: "20px" },
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          Continuing to adopt new technologies to build WEB3 circle social
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#9A9A9A",
            fontSize: { xs: "15px", md: "20px" },
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          We are constantly experimenting with new technology solutions, with a
          continuous technology & product portfolio in the open source world
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "180px",
        }}
      >
        <CooperatorBoxItem>
          <img src={polygon} alt="polygon" />
          Polygon
        </CooperatorBoxItem>
        <CooperatorBoxItem>
          <img src={opensea} alt="opensea" />
          Opensea
        </CooperatorBoxItem>
        <CooperatorBoxItem>
          <img src={rarible} alt="rarible" />
          Rarible
        </CooperatorBoxItem>
        <CooperatorBoxItem>
          <img src={aragon} alt="aragon" />
          Aragon
        </CooperatorBoxItem>
        <CooperatorBoxItem>
          <img src={xmtp} alt="xmtp" />
          XMTP
        </CooperatorBoxItem>

        <CooperatorBoxItem>
          <img src={solid} alt="solid" />
          SOLID
        </CooperatorBoxItem>
        <CooperatorBoxItem>
          <img src={kava} alt="kava" />
          KAVA
        </CooperatorBoxItem>
        <CooperatorBoxItem>
          <img src={filecoin} alt="filecoin" />
          Filecoin
        </CooperatorBoxItem>
        <CooperatorBoxItem>
          <img src={lens} alt="lens" />
          Lens protocol{" "}
        </CooperatorBoxItem>
        <CooperatorBoxItem>
          <img src={relation} alt="relation" />
          Relationlabs
        </CooperatorBoxItem>
      </Box>
    </Container>
  );
};

export default Cooperator;
