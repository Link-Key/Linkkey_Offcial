import { Box, Container, styled, Typography, Button } from "@mui/material";
import CountUp from "react-countup";

const DateItemBox = styled(Box)(() => ({
  minWidth: "300px",
  padding: "50px 40px",
  border: "1px solid rgba(187, 187, 187, 100)",
  borderRadius: "10px",
  padding: "50px 30px",
  span: {
    color: "#FD6262",
    fontSize: "48px",
    fontWeight: "500",
  },
  ".MuiTypography-body1": {
    color: "#9A9A9A",
    fontSize: "18px",
    marginTop: "13px",
  },
}));

const ButtonWrapper = styled(Button)(() => ({
  width: "230px",
  marginTop: "44px",
}));

const ProtocolData = () => {
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
          PROTOCOL DATA
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
          链上实时数据
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
          WEB3 圈层社交数据在不断上升，更多人的加入是在壮大这个社区经济
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "65px",
        }}
      >
        <DateItemBox>
          <CountUp start={0} end={3000345} separator="," duration={2} />
          <Typography>Total Supply</Typography>
          <ButtonWrapper>To Polygonscan</ButtonWrapper>
        </DateItemBox>
        <DateItemBox>
          <CountUp start={0} end={100345} separator="," />
          <Typography>Total Supply</Typography>
          <ButtonWrapper>To Polygonscan</ButtonWrapper>
        </DateItemBox>
        <DateItemBox>
          <CountUp start={0} end={20215} separator="," />
          <Typography>Total Supply</Typography>
          <ButtonWrapper>To Polygonscan</ButtonWrapper>
        </DateItemBox>
      </Box>
    </Container>
  );
};

export default ProtocolData;
