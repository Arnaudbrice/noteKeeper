import React, {useState} from "react";
import {toast} from "react-toastify";
import {nanoid} from "nanoid";

const Form = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setIsClicked(true);

    setNote((prevNote) => {
      return {...prevNote, [name]: value, id: nanoid()};
    });
  };

  const handleSubmitNote = (event) => {

    event.preventDefault();
    if (note.title === "" || note.content === "") {
      toast.error("please fill all fields before submitting");
      return;
    }
    setIsClicked(!isClicked);

    props.onHandleAddNote(note);
    // clear input field
    setNote({title: "", content: ""})
  };

  return (
    <form className=" grid place-items-center rounded-box  mx-auto mt-16 space-y-4" onSubmit={handleSubmitNote}>
      <input
        onChange={handleChange}
        className="input"
        name="title"
        placeholder="Title"
        value={note.title}
      />
      {isClicked && (
        <textarea
          onChange={handleChange}
          className="textarea"
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
      )}

      <button className="btn btn-primary">Add Note</button>
    </form>
  );
};
export default Form;
