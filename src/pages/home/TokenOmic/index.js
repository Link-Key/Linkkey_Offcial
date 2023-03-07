import { Box, Container, Typography } from "@mui/material";
import { Fade } from "react-reveal";
// import TokenOmicImg from "../../../assets/images/TokenOmic.png";
import TokenOmicImg from "../../../assets/images/register-process-for-pc.png";
// import TokenOmicMobile from "../../../assets/images/TokenOmicMobile.png";
import TokenOmicMobile from "../../../assets/images/register-process-for-mobile.png";
import { useScreen } from "../../../provider/screen";

const TokenOmic = () => {
  const screen = useScreen();
  console.log("screen:", screen);
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
            color: "#ea6060",
            fontSize: { xs: "35px", md: "58px" },
            fontWeight: 700,
            marginTop: "12px",
          }}
        >
          TOKENOMICS
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
          Community-driven tokenomics
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#9A9A9A",
            fontSize: { xs: "15px", md: "20px" },
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "50px"
          }}
        >
          150 KEY will be issued for every 1 domain registered, and will last
          until December 2024 (3 years in total) when token issuance will stop,
          with the following allocation rules
        </Typography>
      </Box>
      <Fade bottom big>
        {screen.isMd ? (
          <img
            src={TokenOmicImg}
            alt="TokenOmic"
            style={{
              margin: "50px"
            }}
          />
        ) : (
          <img
            src={TokenOmicMobile}
            style={{
              margin: "20px auto 100px",
            }}
            alt="TokenOmic"
          />
        )}
      </Fade>
    </Container>
  );
};

export default TokenOmic;
