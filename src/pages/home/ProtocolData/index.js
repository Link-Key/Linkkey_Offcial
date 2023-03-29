import { Box, Container, styled, Typography, Button } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";
import Flip from "react-reveal/Flip";
import { get } from "../../../utils/axios";

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
  const [protoData, setProtoData] = useState({
    totalSupply: "0",
    totalHolders: "0",
    totalDIDs: "0",
  });

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

  const handleValue = (value) => {
    console.log("value:", value.replace(",", ""));
    console.log("value:", Number(value.replace(",", "")));
    return Number(value.replaceAll(",", ""));
  };

  const getProtocolData = async () => {
    const resp = await get("/api/v1/accountService/account/statistics");
    console.log("res:", resp);
    if (resp && resp.code === 200) {
      setProtoData(resp.data);
    }
  };

  useEffect(() => {
    getProtocolData();
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
              end={handleValue(protoData.totalSupply)}
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
            <ButtonWrapper href="https://www.oklink.com/polygon/token/0x5CA9A8405499a1Ee8fbB1849f197b2b7e518985f">
              To OKLink
            </ButtonWrapper>
          </DateItemBox>
        </Flip>
        <Flip right>
          <DateItemBox>
            <CountUp
              start={0}
              end={handleValue(protoData.totalHolders)}
              separator=","
              enableScrollSpy={true}
              delay={0}
              redraw={counting}
            />
            <Typography>Total Holders</Typography>
            <ButtonWrapper href="https://www.oklink.com/polygon/token/0x5CA9A8405499a1Ee8fbB1849f197b2b7e518985f">
              To OKLink
            </ButtonWrapper>
          </DateItemBox>
        </Flip>
        <Flip right>
          <DateItemBox>
            <CountUp
              start={0}
              end={handleValue(protoData.totalDIDs)}
              separator=","
              enableScrollSpy={true}
              delay={0}
              redraw={counting}
            />
            <Typography>Total DIDs</Typography>
            <ButtonWrapper href="https://www.oklink.com/polygon/token/0x19AD2b1F012349645C3173EA63F98948A2b43d27">
              To OKLink
            </ButtonWrapper>
          </DateItemBox>
        </Flip>
      </Box>
    </Container>
  );
};

export default ProtocolData;
