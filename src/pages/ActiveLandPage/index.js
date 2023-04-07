import { Box, Container, Typography, styled } from "@mui/material";
import { ReactComponent as Back } from "./Icons/back.svg";
import { ReactComponent as okx } from "./Icons/okx.svg";
import { ReactComponent as title } from "./Icons/title.svg";
import { ReactComponent as bottom } from "./Icons/bottom.svg";
import FlipCountdown from "@rumess/react-flip-countdown";
import styles from "./index.less";

const BackImage = styled(Back)(() => ({
  position: "absolute",
}));

const OKX = styled(okx)(() => ({
  position: "absolute",
  left: "0",
  right: "0",
  margin: "0 auto",
  marginTop: "75px",
  // zIndex: 1,
}));

const Title = styled(title)(() => ({
  position: "absolute",
  left: "0",
  right: "0",
  margin: "0 auto",
  marginTop: "290px",
}));

const Bottom = styled(bottom)(() => ({
  position: "absolute",
  left: "0",
  right: "0",
  margin: "0 auto",
  marginTop: "900px",
}));

const ActiveLandPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "750px",
        height: "100vh",
        margin: "0 auto",
        zIndex: 0,
      }}
    >
      <BackImage />
      <OKX />
      <Title />

      <Box
        sx={{
          position: "absolute",
          left: "0",
          right: "0",
          margin: "0 auto",
          marginTop: "700px",
          "&.flip-countdown.size-medium .flip-countdown-piece .flip-countdown-title":
            {
              color: "white",
            },
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
          // size="large"
          endAt={"2023-04-18 16:00:00"} // Date/Time
          className={styles.demo}
        />
      </Box>

      <Bottom />
    </Box>
  );
};

export default ActiveLandPage;
