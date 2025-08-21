import React from "react";

import {MdDeleteForever, MdEditCalendar} from "react-icons/md";
import {useNavigate} from "react-router";

const Note = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className=" w-full h-full card bg-base-100  shadow-sm   transition-transform duration-200 hover:scale-102 hover:drop-shadow-[0_0_10px_gray]  border rounded-lg ">
      <div className="card-body  p-0 items-center text-center  space-y-8  divide-y-2 divide-[#1676b1]/50">
        <h2 className="card-title pt-4 text-bold ">{props.note.title}</h2>
        <p className="pb-[2rem] w-full">
          {props.note.content.substring(0, 20)}
          {"... "}
          <span
            className="btn bg-[#1676b1] hover:bg-[#1676b1]/95  "
            onClick={() => navigate(`/note/${props.note.id}`)}
          >
            Read More
          </span>
        </p>

        <div className="card-actions  w-full justify-between  ">
          <MdEditCalendar
            onClick={() => navigate(`/note/${props.note.id}/edit`)}
            className="btn btn-primary w-15 h-15 rounded-full "
          >
            Edit
          </MdEditCalendar>

          <MdDeleteForever
            onClick={() => props.handleClicked(props.note.id)}
            className="btn  btn-secondary w-15 h-15 rounded-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
