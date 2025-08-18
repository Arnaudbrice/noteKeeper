import React, {useState} from "react";
import {useNavigate, useParams} from "react-router";
import {toast} from "react-toastify";
import useNotes from "../hooks/useNotes.jsx";

const Edit = () => {
  const {noteId} = useParams();

  const navigate = useNavigate();
  const {notes, setNotes, filteredNotes, setFilteredNotes} = useNotes();
  let findNote = notes.find((singleNote) => singleNote.id === noteId);

  console.log("findNote", findNote);
  const [note, setNote] = useState({
    id: noteId,
    title: findNote.title,
    content: findNote.content,
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    setNote((prev) => {
      return {...prev, [name]: value};
    });
  };

  const handleSubmitNote = (event) => {
    event.preventDefault();
    if (note.title === "" || note.content === "") {
      toast.error("please fill all fields before submitting");
      return;
    }

    const updatedNote = notes.map((singleNote) => {
      if (singleNote.id === noteId) {
        return {...singleNote, ...note};
      } else {
        return singleNote;
      }
    });

    console.log("updatedNote", updatedNote);
    setNotes(updatedNote);

    localStorage.setItem("notes", JSON.stringify(updatedNote));

    navigate("/");
    toast.success(<div>Successfully Updated the {note.title} Note</div>);
    // clear input field
  };

  return (
    <form
      className=" grid place-items-center rounded-box  mx-auto mt-16 space-y-4 w-full "
      onSubmit={handleSubmitNote}
    >
      <input
        onChange={handleChange}
        className="input w-full text-lg"
        name="title"
        placeholder="Title"
        value={note.title}
      />

      <>
        <label className="placeholder text-black mr-auto">
          <strong>Take A Note </strong> ( use <strong>```Your Code```</strong> for
          code) and (<strong>**your text**</strong> for strong text) "
        </label>
        <textarea
          onChange={handleChange}
          className="textarea w-full text-lg"
          name="content"
          placeholder="Take a Note...
           "
          rows="25"
          value={note.content}
        />
      </>

      <button className="btn bg-[#1676b1] w-full">Update Note</button>
    </form>
  );
};
export default Edit;
