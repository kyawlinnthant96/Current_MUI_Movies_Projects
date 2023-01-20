import React from "react";
import { AppBar, Box, Divider, Stack, Typography } from "@mui/material";

import imgLogo from "@assets/img-logo.png";

const Navbar = () => {
  return (
    <Box>
      <AppBar>app bar</AppBar>
      <AppBar
        color="default"
        position="fixed"
        sx={{ left: 0, height: "100vh", width: "fit-content" }}
      >
        <Box>
          <Stack divider={<Divider />}>
            <Box paddingX={4} paddingY={3}>
              <img src={imgLogo} width={160} />
            </Box>
            <Box paddingX={2} paddingY={3}>category</Box>
            <Box paddingX={2} paddingY={3}>genres</Box>
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
