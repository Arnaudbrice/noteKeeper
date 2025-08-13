import {nanoid} from "nanoid";
import React, {useState} from "react";
import {toast} from "react-toastify";

const Form = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    console.log(value)
    if (value) {
      setIsClicked(true);
    }

    setIsClicked(false);
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
    setIsClicked(false);

    props.onHandleAddNote(note);
    // clear input field
    setNote({title: "", content: ""})
  };

  return (
    <form className=" grid place-items-center rounded-box  mx-auto mt-16 space-y-4 w-full sm:w-[50%]"
          onSubmit={handleSubmitNote}>
      <input
        onChange={handleChange}
        className="input w-full"
        name="title"
        placeholder="Title"
        value={note.title}
      />
      {(isClicked || note.title.trim().length >= 1) && (
        <>
          <label className="placeholder text-black mr-auto"><strong>Take A Note </strong> (
            use <strong>```code```</strong> for code) and
            (
            <strong>**code**</strong> for
            strong text) "
          </label><textarea
          onChange={handleChange}
          className="textarea w-full"
          name="content"
          placeholder="Take a Note...
           "
          rows="3"
          value={note.content}
        /></>

      )
      }

      <button className="btn bg-[#1676b1] w-full">Add Note</button>
    </form>
  );
};
export default Form;
