import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { Sidebar, Navbar } from "@components";

const Layout = () => {
  return (
    <Stack direction="row">
      <Sidebar />
      <Stack flexGrow={1}>
        <Navbar />
        <Outlet />
      </Stack>
    </Stack>
  );
};
export default Layout;
