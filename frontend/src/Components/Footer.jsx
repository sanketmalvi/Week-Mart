import * as React from "react";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { useLocation } from "react-router-dom";
import MyFooter from "./Pages/MyFooter";

const Footer = () => {
  const usefulLinks = [
    "Home",
    "Fashion",
    "Accessories",
    "Order Tracking",
    "Wishlist",
  ];

  const { pathname } = useLocation();

  return (
    <Box
      sx={{ flexGrow: 1 }}
      marginTop={5}
      display={
        pathname == "/signin" ||
        pathname == "/signup" ||
        pathname.startsWith("/dashboard") ||
        pathname.startsWith("/users") ||
        pathname.startsWith("/my-account")
          ? "none"
          : { xs: "none", sm: "block" }
      }
      backgroundColor="#F4EEFF"
    >
      <Stack
        padding={"20px 0"}
        direction="row"
        display="flex"
        flexWrap="wrap"
        spacing={2}
        justifyContent="space-around"
      >
        <Stack direction="column">
          <Typography variant="h6" mb={1} color="#424874">
            Mern E-Shop
          </Typography>
          <Typography variant="body2" paragraph maxWidth={300}>
            Mern E-Shop is a full stack web app developed by Sanket, offering
            a lot of features such as separate admin/seller/user page, real time
            payment gateway, account verification on link click and a lot more.
            Explore this app to know more features.
          </Typography>
        </Stack>

        <Stack>
          <Typography variant="h6" mb={1} color="#424874">
            Useful Links
          </Typography>
          <Box gap={8} display="flex">
            <Stack>
              {usefulLinks.map((item, index) => (
                <Typography key={item + index} paragaraph>
                  {item}
                </Typography>
              ))}
            </Stack>
            <Stack>
              {usefulLinks.map((item, index) => (
                <Typography key={item + index} paragaraph>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Stack>
          <Typography variant="h6" mb={1} color="#424874">
            Contact
          </Typography>
          <Stack spacing={2} direction="column">
            <Stack spacing={2} direction="row">
              <FmdGoodRoundedIcon />
              <Typography paragraph>Betul, Madhya Pradesh, India</Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <CallRoundedIcon />
              <Typography paragraph>+91 794561354</Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <MailRoundedIcon />
              <Typography paragraph>as7366902@gmail.com</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <MyFooter />
    </Box>
  );
};

export default Footer;
