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

const CardWrapper = styled(Card)(() => ({
  width: "485px",
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
        <CardWrapper>
          <CardMedia
            component="img"
            sx={{
              maxWidth: "443px",
            }}
            image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile03.16sucai.com%2F2017%2F1100%2F16sucai_P591F9E071.JPG&refer=http%3A%2F%2Ffile03.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661786369&t=d88d4a07a1a0121ce97d8e822e059fd8"
          />
          <CardContent>
            <Typography>LINKKEY DAO</Typography>
            <Typography variant="body2">By Aragon</Typography>
            <Link>
              <ArrowRight />
            </Link>
          </CardContent>
        </CardWrapper>

        <CardWrapper>
          <CardMedia
            component="img"
            sx={{
              maxWidth: "443px",
            }}
            image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile03.16sucai.com%2F2017%2F1100%2F16sucai_P591F9E071.JPG&refer=http%3A%2F%2Ffile03.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661786369&t=d88d4a07a1a0121ce97d8e822e059fd8"
          />
          <CardContent>
            <Typography>LINKKEY TEAM DAO</Typography>
            <Typography variant="body2">By Aragon</Typography>
            <Link>
              <ArrowRight />
            </Link>
          </CardContent>
        </CardWrapper>
      </Box>
    </Container>
  );
};

export default DAO;
