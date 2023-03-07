import { React, useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import NoteContext from "../../Store/cart-context";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

const options = [
  "Delete note",
  "Add label",
  "Add drawing",
  "Make a copy",
  "Show checkboxes",
  "Copy to Google Docs",
];

const ITEM_HEIGHT = 28;
export default function ArchiveCard({ item }) {
  const {
    globelNote,
    setGlobelNote,
    archiveNotes,
    setArchiveNotes,
    deleteNotes,
    setDeleteNotes,
  } = useContext(NoteContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option, item) => {
    setAnchorEl(null);
    if (option === "Delete note") {
      const updatedNotes = archiveNotes.filter((data) => data.id !== item.id);
      setArchiveNotes(updatedNotes);
      setDeleteNotes((prevArr) => [item, ...prevArr]);
    }
  };

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(globelNote));
  }, [globelNote]);

  const unArchiveNote = (item) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== item.id);
    setArchiveNotes([...updatedNotes]);
    setGlobelNote((prev) => [item, ...prev]);
    localStorage.setItem("archive", JSON.stringify(updatedNotes));
  };

  return (
    <StyledCard sx={{ minWidth: 275, backgroundColor: item.bgcolor }}>
      {item.img ? (
        <img
          src={item.img}
          alt=""
          style={{ width: "270px", height: "240px" }}
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
        <UnarchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => unArchiveNote(item)}
        />
        <MoreVertIcon onClick={handleClick} />
      </CardActions>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            minHeight: ITEM_HEIGHT * 1.5,
            width: "19ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleClose(option, item)}
            sx={{
              fontSize: ".875rem",
              fontWeight: "400",
              lineHeight: "1.25rem",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </StyledCard>
  );
}
