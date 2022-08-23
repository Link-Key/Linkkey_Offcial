import { Container, Divider, Box, styled } from "@mui/material";
// import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import Logo from "../../assets/images/logo.png";
import OuterLink from "../OuterLink";

// eslint-disable-next-line no-unused-vars
const FooterItem = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  ".MuiTypography-body1": {
    color: "#333",
    fontSize: "20px",
    fontWeight: 600,
  },
  ".MuiTypography-body2": {
    color: "#333",
    fontSize: "14px",
    fontWeight: 400,
    ":hover": {
      color: "#ea6060",
    },
  },
}));

const Footer = () => {
  return (
    <Container
      sx={{
        marginTop: "90px",
      }}
    >
      <Divider
        sx={{
          borderColor: "#bbb",
          borderWidth: "1px",
          // marginBottom: "10px",
        }}
      />
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "135px",
        }}
      >
        <FooterItem>
          <Typography>ABOUT</Typography>
          <Link underline="none">
            <Typography variant="body2">About Linkkey</Typography>
          </Link>
          <Link underline="none">
            <Typography variant="body2">Contact Us</Typography>
          </Link>
          <Link underline="none">
            <Typography variant="body2">Invest to Us</Typography>
          </Link>
        </FooterItem>

        <FooterItem>
          <Typography>PRODUCT</Typography>
          <Link underline="none">
            <Typography variant="body2">SNS</Typography>
          </Link>
          <Link underline="none">
            <Typography variant="body2">LinkChat</Typography>
          </Link>
          <Link underline="none">
            <Typography variant="body2">LinkPost</Typography>
          </Link>
        </FooterItem>

        <FooterItem>
          <Typography>MORE</Typography>
          <Link underline="none">
            <Typography variant="body2">Docs</Typography>
          </Link>
          <Link underline="none">
            <Typography variant="body2">Help Center</Typography>
          </Link>
          <Link underline="none">
            <Typography variant="body2">FAQs</Typography>
          </Link>
        </FooterItem>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: "20px", sm: "20px", md: "0" },
          alignItems: "center",
          justifyContent: "space-between",
          margin: { xs: "50px 0", sm: "50px 0" },
          img: { width: "150px" },
        }}
      >
        <img src={Logo} alt="logo" />
        <Box
          sx={{
            // marginTop: "20px",
            svg: {
              color: "grey",
            },
            a: {
              width: "50px",
              height: "50px",
              border: "1px solid grey",
              borderRadius: "50px",
            },
          }}
        >
          <OuterLink />
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: "14px",
          paddingBottom: "22px",
        }}
      >
        © 2021-2022 by Linkkey DAO
      </Box>
    </Container>
  );
};

export default Footer;
