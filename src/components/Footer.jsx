import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80x" bgcolor="#f4dee0" className="footer">
      <Stack gap="40px" alignItems="center" px="40px" pt="25px">
        <img src={Logo} width="50px" height="40px"/>
        <Typography variant = "h5" pb="40px" c >Made with love by Merunus</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
