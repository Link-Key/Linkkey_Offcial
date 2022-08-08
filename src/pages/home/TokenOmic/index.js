import { Box, Container, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import TokenOmicImg from "../../../assets/images/TokenOmic.png";

const TokenOmic = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "90px",
        img: {
          maxWidth: "100%",
        },
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
            color: "#FD6262",
            fontSize: { xs: "35px", md: "58px" },
            fontWeight: 700,
            marginTop: "12px",
          }}
        >
          TOKENOMIC
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
          Community-driven tokenomic
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
          150 KEY will be issued for every 1 domain registered, and will last
          until December 2024 (3 years in total) when token issuance will stop,
          with the following allocation rules
        </Typography>
      </Box>
      <Fade bottom big>
        <img src={TokenOmicImg} alt="TokenOmic" />
      </Fade>
    </Container>
  );
};

export default TokenOmic;
