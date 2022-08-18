import { Box, Container, Typography } from "@mui/material";
import { memo } from "react";
import { Fade } from "react-reveal";
import SocialProtocolImg from "../../../assets/images/socialProtocol.png";

const SocialProtocol = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        img: {
          maxWidth: "80%",
          marginBottom: "100px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
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
          CIRCLE SOCIAL PROTOCOL
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
          Not web3 version of Twitter
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
          We focus on small circle WEB3 social, we don't store user data, we are
          passionate about building open source & on-chain applications
        </Typography>
      </Box>
      <Fade left big>
        <img src={SocialProtocolImg} alt="SocialProtocolImg" />
      </Fade>
    </Container>
  );
};

export default memo(SocialProtocol);
