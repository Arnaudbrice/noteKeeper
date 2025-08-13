import React from "react";

import {MdDeleteForever} from "react-icons/md";
import {useNavigate} from "react-router";
import useNotes from "../hooks/useNotes";

const Note = (props) => {
  const {notes, setNotes} = useNotes();

  const navigate = useNavigate();
  const handleDelete = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);

    setNotes(filteredNotes);
  };
  return (
    <div className=" w-full h-full card bg-base-100  shadow-sm ">
      <div className="card-body  p-0 items-center text-center  space-y-8  divide-y-2 divide-[#1676b1]/50">
        <h2 className="card-title pt-4 text-bold ">{props.note.title}</h2>
        <p className="pb-[2rem] w-full">
          {props.note.content.substring(0, 20)}
          {"... "}
          <span
            className="btn bg-[#1676b1] "
            onClick={() => navigate(`/note/${props.note.id}`)}
          >
            Read More
          </span>
        </p>
        <div className="card-actions ml-auto">
          {/*<button*/}
          {/*  onClick={() => handleDelete(props.note.id)}*/}
          {/*  className="btn btn-primary "*/}
          {/*>*/}
          {/*  Delete*/}
          {/*</button>*/}

          <MdDeleteForever
            onClick={() => handleDelete(props.note.id)}
            className="btn  btn-secondary w-15 h-15 rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
