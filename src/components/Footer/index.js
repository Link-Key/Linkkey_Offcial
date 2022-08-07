import { Container, Divider, Box, styled } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
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
      color: "#fd6262",
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
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: { xs: "50px", sm: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#fd6262",
            marginTop: { md: "30px" },
            cursor: "pointer",
            svg: {
              width: "150px",
            },
            span: {
              fontSize: "50px",
              color: "#fd6262",
              fontWeight: "600",
              marginLeft: "-40px",
              marginTop: "-10px",
            },
            position: "relative",
            left: { xs: "-22px", sm: "-22px", md: "0" },
            top: { xs: "50px", sm: "50px", md: "0" },
          }}
          onClick={() => {
            const bodyEle = document.body;
            bodyEle.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          }}
        >
          <Logo />
          <span>LINKKEY</span>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
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
