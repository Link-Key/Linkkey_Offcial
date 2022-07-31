import { Box, Container, Link, styled } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import { linkList } from "../../config/const";

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
        position: "fixed",
        minWidth: "100vw",
        top: "0",
        zIndex: "999",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        height: "70px",
      }}
    >
      <HeaderWrapper>
        <Link href={linkList.docs} target="_blank" underline="none">
          Docs
        </Link>
        <Link href={linkList.blog} target="_blank" underline="none">
          Blog
        </Link>
        <Link href={linkList.whitePaper} target="_blank" underline="none">
          WhitePaper
        </Link>
        <Link
          href={linkList.docs}
          target="_blank"
          underline="none"
          sx={{
            svg: {
              width: 100,
            },
          }}
        >
          <Logo />
        </Link>
        <Link href={linkList.sns} target="_blank" underline="none">
          SNS
        </Link>
        <Link href={linkList.linkChat} target="_blank" underline="none">
          LinkChat
        </Link>
        <Link href={linkList.roadMap} target="_blank" underline="none">
          RoadMap
        </Link>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
