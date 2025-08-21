import React, {useEffect, useRef} from "react";
import {toast} from "react-toastify";

import useNotes from "../hooks/useNotes";

const Dialog = (props) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (props.isClicked) {
      dialogRef.current?.showModal(); // Open dialog
    } else {
      dialogRef.current?.close(); // Close dialog
    }
  }, [props.isClicked]);


  const {notes, setNotes, filteredNotes} = useNotes();

  const handleConfirmDelete = (id) => {
    const filteredAllNotes = notes.filter((note) => note.id !== id);

    setNotes(filteredAllNotes);

    toast.success(<div>Successfully deleted the {props.note.title} note</div>);

    dialogRef.current?.close(); // Close the dialog after deletion
  };

  // only display a dialog if the delete button from the note has been clicked
  if (!props.isClicked) {
    return null;
  }
  return (
    <div className="bg-black text-white text-center">
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="text-xl font-bold mb-4">Delete {props.note.title}</h3>
          <p>Are you sure you want to delete {props.note.title}?</p>
          <div className="modal-action flex flex-rows justify-between">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
              onClick={props.onClose} // Close on click
            >
              ✕
            </button>
            <button
              className="btn bg-white text-black"
              type="button"
              onClick={props.onClose} // Close on click
            >
              Cancel
            </button>
            <button
              onClick={() => handleConfirmDelete(props.note.id)}
              className="btn btn-error"
              type="button" // Prevent form submission
            >
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Dialog;
