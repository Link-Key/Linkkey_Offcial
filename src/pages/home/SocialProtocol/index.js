import { Box, Container, Typography } from "@mui/material";

const SocialProtocol = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
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
          CIRCLE SOCIAL PROTOCOL
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
          不做web3版本的推特
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
          我们专注于小圈层的WEB3社交，我们不存储用户数据，我们热衷于构建开源&链上的应用
        </Typography>
      </Box>
    </Container>
  );
};

export default SocialProtocol;
