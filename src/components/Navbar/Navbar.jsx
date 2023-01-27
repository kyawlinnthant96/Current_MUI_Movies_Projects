import { useState } from "react";

import {
  AppBar,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Drawer,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  AccountCircle,
  Brightness4,
  Brightness7,
  Menu,
} from "@mui/icons-material";
import { Search, Sidebar } from "..";
import { styled } from "@mui/system";

const Navbar = () => {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const MenuButton = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  }));
  const ToolBarWrapper = styled(Toolbar)(({ theme }) => ({
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      flexWrap: "wrap",
    },
  }));

  return (
    <>
      <AppBar position="fixed">
        <ToolBarWrapper>
          {isMobile && (
            <MenuButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <Menu />
            </MenuButton>
          )}
          <IconButton sx={{ ml: 1 }}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            <Button color="inherit">
              Login &nbsp; <AccountCircle />
            </Button>
          </div>
          {isMobile && <Search />}
        </ToolBarWrapper>
      </AppBar>
      <div>
        <nav>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: drawerWidth }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: drawerWidth }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};
export default Navbar;
