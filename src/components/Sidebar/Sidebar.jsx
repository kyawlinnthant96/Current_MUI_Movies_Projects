import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Divider, Stack, Typography } from "@mui/material";
import { BLUE_LOGO, NAV_LINKS } from "@constants";

const Sidebar = () => {
  const navLinksKeys = Object.keys(NAV_LINKS);
  console.log(navLinksKeys);
  return (
    <Box>
      <AppBar
        color="default"
        position="static"
        sx={{ left: 0, height: "100vh", width: "fit-content" }}
      >
        <Box>
          <Stack divider={<Divider />}>
            <Box paddingX={4} paddingY={3}>
              <img src={BLUE_LOGO} width={160} />
            </Box>

            <Box>
              {navLinksKeys.map((navLinkKey) => (
                <Fragment key={navLinkKey}>
                  <Typography variant="body2">{navLinkKey}</Typography>
                  {NAV_LINKS[navLinkKey].map((navLink) => (
                    <NavLink to={navLink.href} key={navLink.href}>
                      <Box paddingX={2} paddingY={1}>
                        <Typography
                          variant="navLink"
                          component="span"
                          textTransform="capitalize"
                        >
                          {navLink.name}
                        </Typography>
                      </Box>
                    </NavLink>
                  ))}
                </Fragment>
              ))}
            </Box>
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Sidebar;
