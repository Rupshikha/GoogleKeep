import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "./styles.module.css";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

export default function EmptyNote() {
  return (
    <Container>
      <LightbulbOutlinedIcon className={styles.light} />
      <Typography className={styles.text}>Notes you add appear here</Typography>
    </Container>
  );
}
