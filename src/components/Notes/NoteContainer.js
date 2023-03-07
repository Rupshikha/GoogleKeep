import { React, useContext } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import NoteForm from "./NoteForm";
import NoteContext from "../../Store/cart-context";
import Notes from "./Notes";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function NoteContainer() {
  return (
    <Box>
      <NoteForm />
      <Notes />
    </Box>
  );
}
