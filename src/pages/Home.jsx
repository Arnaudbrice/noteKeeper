import React from "react";
import Form from "../components/Form";
import Note from "../components/Note";

import useNotes from "../hooks/useNotes";

import {toast} from "react-toastify"

const Home = () => {
  const {notes, setNotes} = useNotes();

  const handleAddNote = (note) => {

    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });

    toast.success(<div>Successfully added a new Note</div>)
  };
  return (
    <>
      <Form onHandleAddNote={handleAddNote}/>
      <div
        className="grid   grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 my-16 ">
        {notes.map((note, index) => {
          return <Note key={index} note={note}/>;
        })}
      </div>

    </>
  );
};
export default Home;
