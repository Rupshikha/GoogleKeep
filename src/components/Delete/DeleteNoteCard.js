import { React, useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import NoteContext from "../../Store/cart-context";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  &:hover {
    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
      rgb(60 64 67 / 15%) 0px 2px 6px 2px;
    cursor: pointer;
  }
`;

export default function DeleteNoteCard({ item, index }) {
  const {
    globelNote,
    setGlobelNote,
    archiveNotes,
    setArchiveNotes,
    deleteNotes,
    setDeleteNotes,
  } = useContext(NoteContext);
  const [localState, setLocalState] = useState([]);

  useEffect(() => {
    localStorage.setItem("delete", JSON.stringify(archiveNotes));
  }, [archiveNotes]);

  const archiveNote = (item) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== item.id);
    setDeleteNotes(updatedNotes);
    setArchiveNotes((prevArr) => [item, ...prevArr]);
    localStorage.setItem("delete", JSON.stringify(updatedNotes));
  };

  const deleteNote = (item) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== item.id);
    setDeleteNotes(updatedNotes);
    localStorage.setItem("delete", JSON.stringify(updatedNotes));
  };

  return (
    <StyledCard sx={{ minWidth: 275, backgroundColor: item.bgcolor }}>
      {item.img ? (
        <img
          src={item.img}
          alt=""
          style={{ width: "240px", height: "240px" }}
        />
      ) : (
        ""
      )}
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.note}
        </Typography>
      </CardContent>
      <CardActions>
        <ArchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(item)}
        />
        <DeleteOutlinedIcon fontSize="small" onClick={() => deleteNote(item)} />
      </CardActions>
    </StyledCard>
  );
}
