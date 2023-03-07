import { React } from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavbarItem } from "./NavbarItem";
import { Link, useLocation } from "react-router-dom";
const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  border: "none",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border: "none",
  paddingLeft: "10px",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Index({ open, handleDrawerClose }) {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  function ItemSelect(text) {
    setSelected(text);
  }
  const theme = useTheme();
  return (
    <Box>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {NavbarItem.map((item, index) => (
            <Link
              to={item.route}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem
                key={index}
                disablePadding
                onClick={() => {
                  ItemSelect(item.route);
                }}
                sx={{
                  width: open ? "280px" : "50px",
                  height: "50px",
                  backgroundColor:
                    selected === item.route ? "#FEEFC3" : "white",
                  borderTopRightRadius: open ? "20px" : "100%",
                  borderBottomRightRadius: open ? "20px" : "100%",
                  borderTopLeftRadius: open ? " " : "100%",
                  borderBottomLeftRadius: open ? " " : "100%",
                  ":hover": {
                    height: "50px",
                    backgroundColor:
                      selected !== item.route ? "#f1f3f4" : "#FEEFC3",
                    color: "#202124",
                    letterSpacing: ".01785714em",
                  },
                }}
              >
                <ListItemButton
                  disableRipple={true}
                  sx={{
                    minHeight: "48px",
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    disableRipple={true}
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon />
                  </ListItemIcon>

                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
