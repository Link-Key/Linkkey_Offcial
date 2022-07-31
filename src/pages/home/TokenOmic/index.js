import { Box, Container, styled, Typography, Button } from "@mui/material";

const TokenOmic = () => {
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
          TOKENOMIC
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
          社区驱动型token经济
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
          每注册1个域名会增发150KEY，持续到2024年12月（共计3年）将停止代币增发，具体的分配规则如下
        </Typography>
      </Box>
    </Container>
  );
};

export default TokenOmic;
