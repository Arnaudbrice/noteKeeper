import React from "react";
import {Link} from "react-router";
import useNotes from "../hooks/useNotes";

const Note = (props) => {
  const {notes, setNotes} = useNotes();
  const handleDelete = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);

    setNotes(filteredNotes);
  };
  return (
    <div className=" w-full h-full card bg-base-100  shadow-sm ">
      <div className="card-body items-center text-center space-y-8 ">
        <h2 className="card-title underline">{props.note.title}</h2>
        <p>
          {props.note.content.substring(0, 15)}
          {"... "}
          <Link className="btn btn-info " to={`/note/:${props.note.id}`}>
            Read More
          </Link>
        </p>
        <div className="card-actions">
          <button
            onClick={() => handleDelete(props.note.id)}
            className="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
