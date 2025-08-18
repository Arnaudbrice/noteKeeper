import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

import useNotes from "../hooks/useNotes";

const Dialog = (props) => {
  const { notes, setNotes, filteredNotes } = useNotes();
  const handleConfirmDelete = (id) => {
    const filteredAllNotes = notes.filter((note) => note.id !== id);

    setNotes(filteredAllNotes);

    toast.success(<div>Successfully deleted the {props.note.title} note</div>);
  };
  return (
    <div>
      {/* Card-spezifisches Modal */}

      <MdDeleteForever
        onClick={() =>
          document.getElementById(`delete-modal-${props.note.id}`).showModal()
        }
        className="btn  btn-secondary w-15 h-15 rounded-full  "
      />

      <dialog id={`delete-modal-${props.note.id}`} className="modal">
        <div className="modal-box">
          <h3 className="text-xl font-bold mb-4">Delete {props.note.title}</h3>
          <p>Are you sure you want to delete {props.note.title}?</p>
          <div className="modal-action ">
            <form className=" w-full flex justify-between" method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>

              <button className="btn bg-white text-black">Cancel</button>
              <button
                onClick={() => handleConfirmDelete(props.note.id)}
                className="btn btn-error "
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Dialog;
