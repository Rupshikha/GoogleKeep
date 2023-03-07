import * as React from "react";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "80ch",
          height: "3em ",
          borderRadius: "10px",
          background: "#f1f3f4",
          marginLeft: "3em",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={styles.random}>
        <SearchIcon style={{ color: "black", margin: "0 20px" }} />
        <Input disableUnderline placeholder="Search" color="black" />
      </div>
    </Box>
  );
}
