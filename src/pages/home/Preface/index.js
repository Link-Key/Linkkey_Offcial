import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { memo } from "react";
import { Fade } from "react-reveal";
import LightSpeed from "react-reveal/LightSpeed";

import ReactTyped from "react-typed";
import SnsRelation from "../../../assets/images/snsRelation.png";
import PolygonCircle from "../../../assets/images/polygonCircle.png";
import ToastMention from "../../../components/ToastMention";
import { linkList } from "../../../config/const";

const Preface = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: { xs: "15vh", sm: "15vh", md: "25vh" },
      }}
    >
      <Box
        sx={{
          height: { xs: "85vh", sm: "85vh", md: "75vh" },
        }}
      >
        <Box
          sx={{
            fontWeight: 900,
            fontSize: { xs: "40px", sm: "70px", md: "91px" },
            color: "#ea6060",
            span: {
              color: "#333",
            },
          }}
        >
          <span>BUILD</span> SOCIAL CIRCLE <span>ON</span> WEB3
        </Box>
        <LightSpeed right>
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
              style={{ color: "#ea6060" }}
            />
          </Typography>
        </LightSpeed>
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
          circles, LINKNFT contract to define the relationship between friends
          and groups, LINKCHAT to achieve encrypted communication between
          friends & groups, LINKPOST to build social interaction between friends
          in circles.
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
              color: "#ea6060",
              border: "2px solid #ea6060",
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
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              sx={{
                width: "270px",
                background: "#ea6060",
                color: "white",
                borderRadius: "10px",
                fontSize: { xs: "15px", md: "20px" },
                "&:hover": {
                  background: "#ea6060cc",
                },
              }}
              onClick={() => {
                ToastMention({ message: "Coming soon!" });
              }}
            >
              JOIN LINKKEY CHAT
            </Button>
            <IconButton
              sx={{ img: { width: "35px" } }}
              href="https://twitter.com/Polygon_Space1/status/1472628456471302144"
            >
              <img src={PolygonCircle} alt="polygon" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Fade left big>
        <Box
          sx={{
            textAlign: "center",
            img: {
              maxWidth: "70%",
              marginBottom: "100px",
            },
          }}
        >
          <img src={SnsRelation} alt="snsRelation" />
        </Box>
      </Fade>
    </Container>
  );
};

export default memo(Preface);
