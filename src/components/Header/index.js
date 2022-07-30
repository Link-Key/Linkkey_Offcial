import { Avatar, Box, Container, Link, styled } from "@mui/material";

const HeaderWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  listStyleType: "none",
  fontSize: "16px",
  gap: "88px",
  a: {
    color: "#101010",
    display: "flex",
    alignItems: "center",
    ":hover": {
      color: "#FD6262",
    },
  },
}));

const Header = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        height: "120px",
      }}
    >
      <HeaderWrapper>
        <Link href="javascript;:" target="_blank" underline="none">
          Docs
        </Link>
        <Link href="javascript;:" target="_blank" underline="none">
          Blog
        </Link>
        <Link href="javascript;:" target="_blank" underline="none">
          WhitePaper
        </Link>
        <Link href="javascript;:" target="_blank" underline="none">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Link>
        <Link href="javascript;:" target="_blank" underline="none">
          SNS
        </Link>
        <Link href="javascript;:" target="_blank" underline="none">
          LinkChat
        </Link>
        <Link href="javascript;:" target="_blank" underline="none">
          RoadMap
        </Link>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
