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
            fontSize: "58px",
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
            fontSize: "18px",
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          财务透明的web3 分布式协同组织
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
          我们没有设立实体办公室，所有资产收入汇集到Linkkey DAO，
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
          其中50%资金会划拨到LinkkeyTeam
          DAO用于项目长期运营，Aragon为我们提供技术&产品支持
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "45px",
          marginTop: "24px",
        }}
      >
        <CardWrapper>
          <CardMedia
            component="img"
            sx={{
              width: "443px",
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
              width: "443px",
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
