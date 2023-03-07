import { React, useState } from "react";
import NoteContext from "./cart-context";

const getNoteItems = () => {
  let list = JSON.parse(localStorage.getItem("note"));
  if (list) {
    return list;
  } else {
    return [];
  }
};

const getArchiveItems = () => {
  let list = JSON.parse(localStorage.getItem("archive"));

  if (list) {
    return list;
  } else {
    return [];
  }
};

const getDeleteItems = () => {
  let list = JSON.parse(localStorage.getItem("delete"));

  if (list) {
    return list;
  } else {
    return [];
  }
};

export default function CartProvider({ children }) {
  const [globelNote, setGlobelNote] = useState(getNoteItems);
  const [archiveNotes, setArchiveNotes] = useState(getArchiveItems);
  const [deleteNotes, setDeleteNotes] = useState(getDeleteItems);

  return (
    <NoteContext.Provider
      value={{
        globelNote,
        setGlobelNote,
        archiveNotes,
        setArchiveNotes,
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
