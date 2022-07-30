import { Container, Box, Typography, Button } from "@mui/material";

const Preface = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        marginTop: "120px",
      }}
    >
      <Box
        sx={{
          fontWeight: 900,
          fontSize: "90px",
          color: "#FD6262",
          span: {
            color: "#333",
          },
        }}
      >
        <span>BUILD</span> CIRCLE SOCIAL <span>ON</span> WEB3
      </Box>
      <Typography
        sx={{
          color: "#6C6C6C",
          fontSize: "36px",
          fontWeight: 700,
          marginTop: "12px",
        }}
      >
        WEB3 DOMAIN/IDENTITY/CHAT/POST
      </Typography>
      <Typography
        sx={{
          width: "943px",
          fontSize: "20px",
          color: "#9A9A9A",
          marginTop: "24px",
        }}
      >
        LINKKEY是构建WEB3圈层社交的通用协议，SNS个人域名服务打造圈层社交身份体系，LINKNFT合约定义好友与群组关系，LINKCHAT实现好友&群组间的加密通讯，LINKPOST构建好友间的圈层社交互动
      </Typography>
      <Box
        sx={{
          marginTop: "24px",
          display: "flex",
          gap: "22px",
          height: "46px",
        }}
      >
        <Button
          sx={{
            width: "270px",
            background: "white",
            color: "#FD6262",
            border: "1px solid #FD6262",
            borderRadius: "10px",
          }}
        >
          REGISTY SNS DOMAIN
        </Button>
        <Button
          sx={{
            width: "270px",
            background: "#FD6262",
            color: "white",
            borderRadius: "10px",
          }}
        >
          JOIN LINKKEY CHAT
        </Button>
      </Box>
    </Container>
  );
};

export default Preface;
