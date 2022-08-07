import { ChevronLeft } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  styled,
} from "@mui/material";
import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import { linkList } from "../../config/const";
import ToastMention from "../ToastMention";

const HeaderWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  listStyleType: "none",
  fontSize: "16px",
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
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        height: "70px",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <HeaderWrapper
          sx={{
            display: {
              sm: "flex",
              xs: "none",
            },
          }}
        >
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
            target="_blank"
            underline="none"
            sx={{
              svg: {
                width: 100,
              },
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
          </Link>
          <Link href={linkList.sns} target="_blank" underline="none">
            SNS
          </Link>
          <Link
            target="_blank"
            underline="none"
            onClick={() => {
              ToastMention({ message: "Coming soon!" });
            }}
          >
            LinkChat
          </Link>
          <Link href={linkList.roadMap} target="_blank" underline="none">
            RoadMap
          </Link>
        </HeaderWrapper>
      </Container>

      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Link
          target="_blank"
          underline="none"
          sx={{
            svg: {
              width: 100,
            },
          }}
          onClick={handleDrawerOpen}
        >
          <Logo />
        </Link>
      </Box>

      <Drawer open={open} anchor="left" onClose={handleDrawerClose}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft
              sx={{
                fontSize: "50px",
              }}
            />
          </IconButton>
        </Box>
        <List
          sx={{
            width: "100vw",
            ".MuiListItem-root": {
              display: "block",
              textAlign: "center",
              fontSize: "30px",
              "&:hover": {
                color: "white",
              },
            },
          }}
          onClick={handleDrawerClose}
        >
          <Link href={linkList.docs} target="_blank" underline="none">
            <ListItem>Docs</ListItem>
          </Link>
          <Link href={linkList.blog} target="_blank" underline="none">
            <ListItem>Blog</ListItem>
          </Link>
          <Link href={linkList.whitePaper} target="_blank" underline="none">
            <ListItem>WhitePaper</ListItem>
          </Link>
          <Link href={linkList.sns} target="_blank" underline="none">
            <ListItem>SNS</ListItem>
          </Link>
          <Link
            target="_blank"
            underline="none"
            onClick={() => {
              ToastMention({ message: "Coming soon!" });
            }}
          >
            <ListItem>LinkChat</ListItem>
          </Link>
          <Link href={linkList.roadMap} target="_blank" underline="none">
            <ListItem>RoadMap</ListItem>
          </Link>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
