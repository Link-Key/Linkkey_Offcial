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
          Continuing to adopt new technologies to build WEB3 circle social
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
          We are constantly experimenting with new technology solutions, with a
          continuous technology & product portfolio in the open source world
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
        <CooperatorBoxItem>Opensea</CooperatorBoxItem>
        <CooperatorBoxItem>Rarible</CooperatorBoxItem>
        <CooperatorBoxItem>Aragon</CooperatorBoxItem>
        <CooperatorBoxItem>XMTP</CooperatorBoxItem>

        <CooperatorBoxItem>SOLID</CooperatorBoxItem>
        <CooperatorBoxItem>KAVA</CooperatorBoxItem>
        <CooperatorBoxItem>Filecoin</CooperatorBoxItem>
        <CooperatorBoxItem>Lens protocol </CooperatorBoxItem>
        <CooperatorBoxItem>Relationlabs</CooperatorBoxItem>
      </Box>
    </Container>
  );
};

export default Cooperator;
