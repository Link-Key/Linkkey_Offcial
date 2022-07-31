import { Box, Container, styled, Typography } from "@mui/material";

const CooperatorBoxItem = styled(Box)(() => ({
  width: "170px",
  height: "100px",
  borderRadius: "10px",
  border: "1px solid rgba(187, 187, 187, 100)",
  fontSize: "20px",
  color: "#9a9a9a",
  fontWeight: 500,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Cooperator = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "132px",
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
          COOPERATOR
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
          持续采用新技术构建WEB3圈层社交
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
          我们在不断尝试新的技术方案，在开源的世界中进行持续的技术&产品组合
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "180px",
        }}
      >
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>

        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
        <CooperatorBoxItem>Polygon Grant</CooperatorBoxItem>
      </Box>
    </Container>
  );
};

export default Cooperator;
