import { Box, Button, styled } from "@mui/material";
import BackPNG from "./images/back.png";
import { ReactComponent as okx } from "./Icons/okx.svg";
import { ReactComponent as sns } from "./Icons/sns.svg";
import { ReactComponent as freeMint } from "./Icons/freeMint.svg";
import { ReactComponent as snapShot } from "./Icons/snapshot.svg";
import { ReactComponent as endTime } from "./Icons/endTime.svg";
import { ReactComponent as coming } from "./Icons/coming.svg";
import { ReactComponent as price } from "./Icons/price.svg";
import { ReactComponent as bottom } from "./Icons/bottom.svg";
import FlipCountdown from "@rumess/react-flip-countdown";

const OKX = styled(okx)(() => ({
  width: "30%",
  height: "100%",
  margin: "0 auto",
  marginTop: "5.5%",
}));

const SNS = styled(sns)(() => ({
  width: "50%",
  height: "100%",
  margin: "0 auto",
  marginTop: "17%",
}));

const FreeMint = styled(freeMint)(() => ({
  width: "50%",
  height: "100%",
  margin: "0 auto",
  marginTop: "4.5%",
}));

const SnapShot = styled(snapShot)(() => ({
  width: "50%",
  height: "100%",
  margin: "0 auto",
  marginTop: "6%",
}));

const EndTime = styled(endTime)(() => ({
  width: "50%",
  height: "100%",
  margin: "0 auto",
  marginTop: "1%",
}));

const Coming = styled(coming)(() => ({
  width: "90%",
  height: "100%",
  margin: "0 auto",
  marginTop: "6%",
}));

const Price = styled(price)(() => ({
  width: "80%",
  height: "100%",
  margin: "0 auto",
  marginTop: "7%",
}));

const Bottom = styled(bottom)(() => ({
  width: "60%",
  height: "100%",
  margin: "0 auto",
  marginTop: "7%",
}));

const ActiveLandPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "750px",
        minHeight: "100vh",
        backgroundImage: `url(${BackPNG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        margin: "0 auto",
        paddingBottom: "30px",
      }}
    >
      <OKX />
      <SNS />
      <FreeMint />
      <SnapShot />
      <EndTime />
      <Coming />

      <Box
        sx={{
          margin: "0 auto",
          marginTop: "6.5%",
        }}
      >
        <FlipCountdown
          theme="light"
          hideYear
          hideMonth
          hideSecond
          dayTitle="Days"
          hourTitle="Hours"
          minuteTitle="Minutes"
          titlePosition="bottom"
          endAt={"2023-04-18 16:00:00"} // Date/Time
        />
      </Box>

      <Price />
      <Button
        sx={{
          width: "33%",
          margin: "0 auto",
          marginTop: "7%",
          fontWeight: 800,
        }}
        onClick={() => {
          window.open(
            "https://gleam.io/Fv5ym/okx-wallet-x-linkkey-super-rewards"
          );
        }}
      >
        Apply now
      </Button>

      <Bottom />
    </Box>
  );
};

export default ActiveLandPage;
