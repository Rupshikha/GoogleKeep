import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
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
      <DeleteOutlineOutlinedIcon className={styles.delete} />
      <Typography className={styles.text}>No notes in Trash</Typography>
    </Container>
  );
}
