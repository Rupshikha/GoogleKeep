import styled from "@emotion/styled";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { React, useContext, useEffect, useState } from "react";
import NoteContext from "../../../Store/cart-context";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
export default function CardContainer({ item }) {
  const {
    globelNote,
    setGlobelNote,
    archiveNotes,
    setArchiveNotes,
    setDeleteNotes,
  } = useContext(NoteContext);

 const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  /*menu method*/
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = (option, item) => {
    console.log(option);
    console.log(item);
    setAnchorEl(null);
    if (option === "Delete note") {
      const updatedNotes = globelNote.filter((data) => data.id !== item.id);
      setGlobelNote(updatedNotes);
      setDeleteNotes((prevArr) => [item, ...prevArr]);
    }
  };

  /* store archive note into localStorage*/
 useEffect(() => {
    localStorage.setItem("archive", JSON.stringify(archiveNotes));
  }, [archiveNotes]);

  /*store note from global to archive*/
  const archiveNote = (item) => {
    const updatedNotes = globelNote.filter((data) => data.id !== item.id);
    setArchiveNotes((prev) => [item, ...prev]);
    setGlobelNote(updatedNotes);
    localStorage.setItem("note", JSON.stringify(updatedNotes));
  };

  return (
    <StyledCard sx={{ minWidth: 275, backgroundColor: item.bgcolor }}>
      <CardContent>
        {item.img ? (
          <img
            src={item.img}
            alt=""
            style={{ width: "240px", height: "240px" }}
          />
        ) : (
          ""
        )}
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
