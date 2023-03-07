import { React, useContext } from "react";
import NoteContext from "../../Store/cart-context";
import NoteCard from "./NoteCard/NoteCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmptyNote from "./EmptyNote/EmptyNote";

export default function Notes() {
  const { globelNote, setGlobelNote } = useContext(NoteContext);

  return (
    <Box>
      {globelNote.length > 0 ? (
        <Grid container style={{ marginTop: "16px" }}>
          {globelNote.map((item) => (
            <Grid item>
              <NoteCard item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyNote />
      )}
    </Box>
  );
}
