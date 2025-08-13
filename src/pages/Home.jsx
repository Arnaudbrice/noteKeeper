import React from "react";

import {toast} from "react-toastify";
import Form from "../components/Form";
import Note from "../components/Note";

import useNotes from "../hooks/useNotes";

const Home = () => {
  const {notes, setNotes, filteredNotes, setFilteredNotes} = useNotes();

  const handleAddNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });

    toast.success(<div>Successfully added a new Note</div>);
  };
  return (
    <>
      <Form onHandleAddNote={handleAddNote}/>
      <div className="grid   grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4 my-16 ">
        {filteredNotes.map((note, index) => (
          <Note key={index} note={note}/>
        ))}
      </div>
    </>
  );
};
export default Home;
