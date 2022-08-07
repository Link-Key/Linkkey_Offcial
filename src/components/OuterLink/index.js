import { memo } from "react";
import { Box, Link, styled } from "@mui/material";
import { ReactComponent as Telegram } from "../../assets/icon/telegram.svg";
import { ReactComponent as Twitter } from "../../assets/icon/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icon/discord.svg";
import { ReactComponent as Github } from "../../assets/icon/github.svg";
import { linkList } from "../../config/const";
// import { ReactComponent as Email } from '../assets/icons/email.svg'

const LinkBtn = styled(Link)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
  svg: {
    color: "black",
  },
  "&:hover": {
    svg: {
      color: "#FB6D05",
    },
  },
}));

const OuterLink = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "24px",
      }}
    >
      {/* <LinkBtn href="#" underline="none">
                <Email />
            </LinkBtn> */}

      <LinkBtn href={linkList.twitter} target="_blank" underline="none">
        <Twitter />
      </LinkBtn>

      <LinkBtn href={linkList.telegram} target="_blank" underline="none">
        <Telegram />
      </LinkBtn>

      <LinkBtn href={linkList.discord} target="_blank" underline="none">
        <Discord />
      </LinkBtn>

      <LinkBtn href={linkList.github} target="_blank" underline="none">
        <Github />
      </LinkBtn>
    </Box>
  );
};

export default memo(OuterLink);
