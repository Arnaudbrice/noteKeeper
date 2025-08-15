import React, {createContext, useEffect, useState} from "react";

const NoteContext = createContext();

export const NoteContextProvider = ({children}) => {
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
  });

  // filteredNotes will always use a copy of the notes array from the localstorage
  const [filteredNotes, setFilteredNotes] = useState([]);


  useEffect(() => {
    // This effect stores the notes in localStorage only when notes change
    setFilteredNotes([...notes])


  }, [notes]);
  useEffect(() => {
    if (isSortClicked) {
      // Create a sorted copy of the notes
      const sortedNotes = [...notes].sort((a, b) => {
        const firstTitle = a.title.toLowerCase();
        const secondTitle = b.title.toLowerCase();
        if (firstTitle > secondTitle) {
          return 1;
        } else if (firstTitle < secondTitle) {
          return -1;
        }
        return 0;
      });
      setFilteredNotes(sortedNotes);
      
    }


  }, [isSortClicked, notes]);

  return (
    <NoteContext
      value={{
        notes,
        setNotes,
        filteredNotes,
        setFilteredNotes,
        isSortClicked,
        setIsSortClicked,
      }}
    >
      {children}
    </NoteContext>
  );
};
export default NoteContext;
