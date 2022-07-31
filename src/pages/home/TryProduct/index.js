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
          围绕WEB3圈层化社交持续构建
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
          我们将持续构建一系列web3产品，逐步完善Linkkey的圈层化WEB3社交场景，为WEB3
          市民提供有价值的服务
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
