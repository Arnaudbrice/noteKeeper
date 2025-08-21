import React, {useState} from "react";

import {toast} from "react-toastify";
import Dialog from "../components/Dialog.jsx";
import Form from "../components/Form";
import Note from "../components/Note";

import useNotes from "../hooks/useNotes";

const Home = () => {
  const {notes, setNotes, filteredNotes, setFilteredNotes} = useNotes();
  const [dialogId, setDialogId] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddNote = (note) => {
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
    // localStorage.setItem("notes", JSON.stringify(notes));

    toast.success(<div>Successfully added a new Note</div>);
  };

  const onHandleClicked = (noteId) => {
    setDialogId(noteId);
  };
  return (
    <>
      <Form onHandleAddNote={handleAddNote}/>
      <div className="grid   grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4 my-16 ">
        {filteredNotes.map((note) => (
          <Note note={note} key={note.id} handleClicked={onHandleClicked}/>
        ))}
      </div>

      {/* // NOte: Modal and Dialog  require an onClose function to handle user interactions for closing the modal, such as clicking a close button or outside the modal*/}
        {/* Render the Dialog outside of the Note component */}
      {filteredNotes.map((note) => (
        <Dialog
          key={note.id}
          isClicked={dialogId === note.id}
          note={note}
          onClose={() => setDialogId(null)} // Close handler
        />
      ))}
    </>
  );
};
export default Home;
