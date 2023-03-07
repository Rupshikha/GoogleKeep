import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../Search/Index";
import KeepImg from "../../Assets/keep.png";
import styles from "./styles.module.css";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    border: "none",
  }),
}));

export default function Index({ open, handleDrawerOpen }) {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        backgroundColor: "white",
        boxShadow: "rgb(218 220 224) 0px -1px 0px 0px inset",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            color: "black",
            marginRight: 1.5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <img src={KeepImg} alt="image" className={styles.img} />
        <Typography variant="h6" noWrap component="div" className={styles.text}>
          Keep
        </Typography>

        <Search className={styles.search} />

        <IconButton
          sx={{
            color: "rgb(137, 136, 136)",
            marginLeft: "7.5em",
            marginRight: "0.5em",
            cursor: "pointer",
          }}
        >
          <RefreshOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "rgb(137, 136, 136)",
            marginRight: "0.5em",
          }}
        >
          <ViewAgendaOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "rgb(137, 136, 136)",
            marginRight: "0.5em",
          }}
        >
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton
          sx={{
            color: "rgb(137, 136, 136)",
            marginLeft: "4em",
          }}
        >
          <AppsOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
