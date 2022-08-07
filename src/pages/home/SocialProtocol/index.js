import { Box, Container, Typography } from "@mui/material";
import SocialProtocolImg from "../../../assets/images/socialProtocol.png";

const SocialProtocol = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        img: {
          marginTop: "-100px",
          maxWidth: "100%",
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
            color: "#FD6262",
            fontSize: "58px",
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
            fontSize: "18px",
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
            fontSize: "18px",
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          We focus on small circle WEB3 social, we don't store user data, we are
          passionate about building open source & on-chain applications
        </Typography>
      </Box>

      <img src={SocialProtocolImg} alt="SocialProtocolImg" />
    </Container>
  );
};

export default SocialProtocol;
