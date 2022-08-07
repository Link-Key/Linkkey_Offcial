import { Container, Box, Typography, Button } from "@mui/material";
import ReactTyped from "react-typed";
import SnsRelation from "../../../assets/images/snsRelation.png";
import ToastMention from "../../../components/ToastMention";
import { linkList } from "../../../config/const";

const Preface = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: { xs: "15vh", sm: "15vh", md: "35vh" },
      }}
    >
      <Box
        sx={{
          fontWeight: 900,
          fontSize: { xs: "40px", sm: "70px", md: "91px" },
          color: "#FD6262",
          span: {
            color: "#333",
          },
        }}
      >
        <span>BUILD</span> CIRCLE SOCIAL <span>ON</span> WEB3
      </Box>
      <Typography
        sx={{
          color: "#6C6C6C",
          fontSize: { xs: "20px", sm: "25px", md: "36px" },
          fontWeight: 700,
          marginTop: "12px",
        }}
      >
        WEB3{" "}
        <ReactTyped
          strings={["DOMAIN", "IDENTITY", "CHAT", "POST"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Typography
        sx={{
          maxWidth: "943px",
          fontSize: { xs: "15px", md: "20px" },
          color: "#9A9A9A",
          marginTop: "24px",
        }}
      >
        LINKKEY is a universal protocol for building WEB3 social circles, SNS
        personal domain name service to create a social identity system for
        circles, LINKNFT contract to define the relationship between friends and
        groups, LINKCHAT to achieve encrypted communication between friends &
        groups, LINKPOST to build social interaction between friends in circles
      </Typography>
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          gap: "22px",
          height: "46px",
          flexWrap: { xs: "wrap", sm: "wrap", md: "row" },
        }}
      >
        <Button
          sx={{
            width: "270px",
            background: "white",
            color: "#FD6262",
            border: "1px solid #FD6262",
            borderRadius: "10px",
            fontSize: { xs: "15px", md: "20px" },
            "&:hover": {
              background: "#ffffffcc",
            },
          }}
          href={linkList.sns}
        >
          REGISTY SNS DOMAIN
        </Button>
        <Button
          sx={{
            width: "270px",
            background: "#FD6262",
            color: "white",
            borderRadius: "10px",
            fontSize: { xs: "15px", md: "20px" },
            "&:hover": {
              background: "#FD6262cc",
            },
          }}
          onClick={() => {
            ToastMention({ message: "Coming soon!" });
          }}
        >
          JOIN LINKKEY CHAT
        </Button>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          img: {
            marginTop: "100px",
            maxWidth: "70%",
            marginBottom: "100px",
          },
        }}
      >
        <img src={SnsRelation} alt="snsRelation" />
      </Box>
    </Container>
  );
};

export default Preface;
