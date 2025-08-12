import React, { createContext, useEffect, useState } from "react";

const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return <NoteContext value={{ notes, setNotes }}>{children}</NoteContext>;
};
export default NoteContext;
