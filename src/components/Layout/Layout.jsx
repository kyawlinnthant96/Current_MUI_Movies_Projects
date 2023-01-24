import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { Sidebar } from "@components";

const Layout = () => {
  return (
    <Stack direction="row">
      <Stack flexGrow={1}>
        <Outlet />
      </Stack>
    </Stack>
  );
};
export default Layout;
