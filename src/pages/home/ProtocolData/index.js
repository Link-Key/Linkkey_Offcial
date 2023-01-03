import { Box, Container, styled, Typography, Button } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";
import Flip from "react-reveal/Flip";

const DateItemBox = styled(Box)(() => ({
  minWidth: "300px",
  border: "1px solid rgba(238, 128, 128, 0.8)",
  borderRadius: "10px",
  padding: "50px 30px",
  textAlign: "center",
  transition: "all .5s",
  span: {
    color: "#ea6060",
    fontSize: "48px",
    fontWeight: "500",
  },
  ".MuiTypography-body1": {
    color: "#9A9A9A",
    fontSize: "18px",
    marginTop: "13px",
  },
  "&:hover": {
    boxShadow: "rgba(238, 128, 128, 0.6) 0px 5px 15px;",
  },
}));

const ButtonWrapper = styled(Button)(() => ({
  width: "230px",
  marginTop: "44px",
}));

const ProtocolData = () => {
  const [counting, setCounting] = useState(false);

  const loadCount = useCallback(() => {
    const protoEle = document.getElementById("protoData");
    // console.log("protoEle:", protoEle.offsetTop);
    // console.log("protoEleHeight:", protoEle.offsetHeight);
    const windowEle = document.documentElement;
    // console.log("windowScrollTop:", windowEle.scrollTop);
    // console.log("windowHeight:", windowEle.clientHeight);
    if (windowEle.scrollTop + windowEle.clientHeight >= protoEle.offsetTop) {
      setCounting(true);
      return true;
    }
    if (windowEle.scrollTop < 100) {
      setCounting(false);
      return false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", loadCount);
  }, [loadCount]);

  return (
    <Container maxWidth="lg" id="protoData">
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
          PROTOCOL DATA
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
          Real-time data on-chain
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#9A9A9A",
            fontSize: { xs: "15px", md: "20px" },
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "50px",
          }}
        >
          WEB3 circle social data is on the rise, more people joining is growing
          this community economy
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "center",
          },
          marginTop: "65px",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          gap: { sm: "20px", xs: "20px" },
        }}
      >
        <Flip right>
          <DateItemBox>
            <CountUp
              start={0}
              end={3394650}
              separator=","
              duration={2}
              enableScrollSpy={true}
              delay={0}
              redraw={counting}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <Typography>Total Supply</Typography>
            <ButtonWrapper href="https://polygonscan.com/token/0x5CA9A8405499a1Ee8fbB1849f197b2b7e518985f">
              To Polygonscan
            </ButtonWrapper>
          </DateItemBox>
        </Flip>
        <Flip right>
          <DateItemBox>
            <CountUp
              start={0}
              end={12224}
              separator=","
              enableScrollSpy={true}
              delay={0}
              redraw={counting}
            />
            <Typography>Total Holders</Typography>
            <ButtonWrapper href="https://polygonscan.com/token/0x5CA9A8405499a1Ee8fbB1849f197b2b7e518985f">
              To Polygonscan
            </ButtonWrapper>
          </DateItemBox>
        </Flip>
        <Flip right>
          <DateItemBox>
            <CountUp
              start={0}
              end={22631}
              separator=","
              enableScrollSpy={true}
              delay={0}
              redraw={counting}
            />
            <Typography>Total DIDs</Typography>
            <ButtonWrapper href="https://polygonscan.com/token/0x19ad2b1f012349645c3173ea63f98948a2b43d27">
              To Polygonscan
            </ButtonWrapper>
          </DateItemBox>
        </Flip>
      </Box>
    </Container>
  );
};

export default ProtocolData;
