import { Box, Container, Link, styled, Typography } from "@mui/material";
import { ReactComponent as ArrowRight } from "../../../assets/icon/arrowRight.svg";

const TryProductItem = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",

  width: "485px",
  height: "565px",
  border: "1px solid rgba(187, 187, 187, 100)",
  padding: "0 45px",
  borderRadius: "10px",
  ".MuiTypography-root": {
    color: "#FD6262",
    fontSize: "58px",
    fontWeight: 700,
    marginTop: "12px",
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
}));

const TryProduct = () => {
  return (
    <Container maxWidth="lg">
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
            fontSize: "58px",
            fontWeight: 700,
            marginTop: "12px",
          }}
        >
          TRY PRODUCT
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
          Continuously build around WEB3 social networking
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
          We will continue to build a series of web3 products to gradually
          improve Linkkey's circle-based WEB3 social scene and provide valuable
          services for WEB3 citizens
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "55px",
        }}
      >
        <TryProductItem>
          <Typography>SNS</Typography>
          <Link>
            <ArrowRight />
          </Link>
        </TryProductItem>

        <TryProductItem>
          <Typography>CHAT</Typography>
          <Link>
            <ArrowRight />
          </Link>
        </TryProductItem>
      </Box>
    </Container>
  );
};

export default TryProduct;
