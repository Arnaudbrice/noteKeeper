import React, {createContext, useEffect, useState} from "react";

const NoteContext = createContext();

export const NoteContextProvider = ({children}) => {
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
  });

  // filteredNotes will always use a copy of the notes array from the localstorage
  const [filteredNotes, setFilteredNotes] = useState([])


  useEffect(() => {
    setFilteredNotes(notes)
    localStorage.setItem("notes", JSON.stringify(notes));


  }, [notes]);

  return <NoteContext value={{notes, setNotes, filteredNotes, setFilteredNotes}}>{children}</NoteContext>;
};
export default NoteContext;
