import {
  AppBar,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingX={2}
        paddingY={3}
      >
        <Typography>darkmode switch</Typography>
        <TextField
          type="search"
          variant="standard"
          placeholder="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="primary">LOGIN BTN</Button>
      </Stack>
    </AppBar>
  );
};
export default Navbar;
