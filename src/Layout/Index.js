import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "../components/Drawer/Index";
import AppBar from "../components/AppBar/Index";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* <DrawerHeader /> */}
      {props.children}
      </Box>
    </Box>
  );
}
