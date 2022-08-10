import {
  Box,
  Container,
  styled,
  Typography,
  Link,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { ReactComponent as ArrowRight } from "../../../assets/icon/arrowRight.svg";
import DAOImg1 from "../../../assets/images/dao.png";
import DAOImg2 from "../../../assets/images/dao1.png";
import { linkList } from "../../../config/const";
import Fade from "react-reveal/Fade";

const CardWrapper = styled(Card)(() => ({
  maxWidth: "485px",
  padding: "22px",
  borderRadius: "10px",
  background: "white",
  border: "1px solid rgba(187, 187, 187, 100)",
  img: {
    borderRadius: "10px",
  },
  ".MuiCardContent-root": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "78px",
    paddingBottom: "0px",
    ".MuiTypography-body1": {
      width: "312px",
      color: "#FD6262",
      fontSize: "58px",
      fontWeight: "600",
    },
    ".MuiTypography-body2": {
      width: "312px",
      color: "#9A9A9A",
      fontSize: "18px",
      fontWeight: "500",
    },
    svg: {
      color: "#FD6262",
      ":hover": {
        color: "#fc1616",
      },
    },
    a: {
      position: "absolute",
      right: "45px",
      bottom: "20px",
    },
  },
}));

const DAO = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "90px",
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
          WE ARE DAO
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
          Financially Transparent web3 DAO
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
          We don't have a physical office, and all asset income is pooled into
          Linkkey DAO.
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
          50% of the funds will be allocated to LinkkeyTeam DAO for the
          long-term operation of the project, and Aragon provides technical &
          product support for us.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "45px",
          marginTop: "24px",

          flexWrap: { xs: "wrap", sm: "wrap", md: "row" },
        }}
      >
        <Fade left big>
          <CardWrapper>
            <CardMedia
              component="img"
              sx={{
                maxWidth: "443px",
              }}
              image={DAOImg2}
            />
            <CardContent>
              <Typography>LINKKEY DAO</Typography>
              <Typography variant="body2">By Aragon</Typography>
              <Link href={linkList.dao} target="_target">
                <ArrowRight />
              </Link>
            </CardContent>
          </CardWrapper>
        </Fade>
        <Fade right big>
          <CardWrapper>
            <CardMedia
              component="img"
              sx={{
                maxWidth: "443px",
              }}
              image={DAOImg1}
            />
            <CardContent>
              <Typography>LINKKEY TEAM DAO</Typography>
              <Typography variant="body2">By Aragon</Typography>
              <Link href={linkList.teamDao} target="_target">
                <ArrowRight />
              </Link>
            </CardContent>
          </CardWrapper>
        </Fade>
      </Box>
    </Container>
  );
};

export default DAO;
