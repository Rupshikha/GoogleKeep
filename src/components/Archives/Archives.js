import { React, useContext } from "react";
import NoteContext from "../../Store/cart-context";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArchiveCard from "./ArchiveCard";
import EmptyArchive from "./EmptyArchive/EmptyArchive";

export default function Archives() {
  const {
    globelNote,
    setGlobelNote,
    archiveNotes,
    setArchiveNotes,
    deleteNotes,
    setDeleteNotes,
  } = useContext(NoteContext);

  return (
    <Box>
      {archiveNotes.length > 0 ? (
        <Grid container style={{ marginTop: "16px" }}>
          {archiveNotes.map((item) => (
            <Grid item>
              <ArchiveCard item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyArchive />
      )}
    </Box>
  );
}
