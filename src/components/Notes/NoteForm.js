import { Box, IconButton, TextField, unstable_useId } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useContext, useEffect, useRef } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import NoteContext from "../../Store/cart-context";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ColorMenu from "./ColourMenu/ColorMenu";

const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 10px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: auto;
  position: relative;
`;
const NoteForm = () => {
  const info = {
    id: "",
    title: "",
    note: "",
    img: null,
    bgcolor: "",
  };
  const [showTextField, setShowTextField] = useState(false);
  const [note, setNote] = useState({ ...info, id: uuid() });
  const { globelNote, setGlobelNote } = useContext(NoteContext);
  const [imgState, setImageState] = useState();
  const hiddenFileInput = useRef(null);
  const [open, setOpen] = useState(false);
  const [bgColor, setbgColour] = useState("");

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(globelNote));
  }, [globelNote]);

  /* colourMenu method */
  const colourHandleClick = (event) => {
    setOpen(!open);
  };

  const takeColour = (color) => {
    setbgColour(color);
    setNote({ ...note, bgcolor: color });
  };

  /* form submit method*/
  const onTextAreaClick = () => {
    setShowTextField(true);
  };

  const onTextAreaClickAway = () => {
    setShowTextField(false);
    if (note.title || note.note || note.img) {
      setGlobelNote([...globelNote, note]);
      setImageState(null);
    }
    setNote({ ...info });
    setOpen(false);
    setbgColour("");
  };

  /*textField onChange Method*/

  const changeTextField = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value, id: uuid() });
  };

  /*img onChange method*/
  const handleChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader.result);
        setNote({ ...note, img: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log("pic",e.target.files[0]);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <ClickAwayListener onClickAway={onTextAreaClickAway}>
      <Form sx={{ backgroundColor: bgColor }}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ paddingLeft: "4px" }}
            name="title"
            onChange={changeTextField}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          sx={{ padding: "5px 0  1px 4px" }}
          name="note"
          value={note.note}
          onChange={changeTextField}
          onClick={onTextAreaClick}
        />

        {showTextField && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "8px",
            }}
          >
            <IconButton sx={{ marginRight: "8px" }}>
              <AddAlertOutlinedIcon sx={{ fontSize: "18px" }} />
            </IconButton>
            <IconButton sx={{ margin: "0 8px" }}>
              <PersonAddAltOutlinedIcon sx={{ fontSize: "18px" }} />
            </IconButton>
            <IconButton sx={{ margin: "0 8px" }}>
              <ColorLensOutlinedIcon
                sx={{ fontSize: "18px", position: "absolute" }}
                onClick={colourHandleClick}
              />
            </IconButton>
            <ColorMenu
              open={open}
              takeColour={takeColour}
              colourHandleClick={colourHandleClick}
            />
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              name="image"
              style={{ display: "none" }}
            />
            <IconButton sx={{ margin: "0 8px" }}>
              <InsertPhotoOutlinedIcon
                sx={{ fontSize: "18px" }}
                onClick={handleClick}
              />
            </IconButton>
            <IconButton sx={{ margin: "0 8px" }}>
              <ArchiveOutlinedIcon sx={{ fontSize: "18px" }} />
            </IconButton>
            <IconButton sx={{ margin: "0 8px" }}>
              <MoreVertOutlinedIcon sx={{ fontSize: "18px" }} />
            </IconButton>
            <Button
              disableRipple={true}
              sx={{
                color: "rgba(0,0,0,.87)",
                width: "1em",
                fontSize: ".875rem",
                marginLeft: "auto",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
              onClick={onTextAreaClickAway}
            >
              Close
            </Button>
          </div>
        )}
      </Form>
    </ClickAwayListener>
  );
};

export default NoteForm;
