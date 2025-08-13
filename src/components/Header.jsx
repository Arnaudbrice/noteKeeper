import React, {useContext, useEffect, useRef, useState} from "react";
import {Link} from "react-router";
import NoteContext from "../context/NoteContext.jsx";

const Header = () => {
  const {notes, setNotes, filteredNotes, setFilteredNotes} =
    useContext(NoteContext);
  // create a ref to hold reference to the input search field element
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");


  // handle keydown event for search field focus using cmd+k or ctrl+k keys
  useEffect(() => {
    const handleKeyDown = (event) => {

      // event.metakKey is true if Command (⌘) key is pressed on MacOs
      // event.ctrlKey is true if control (ctrl) key is pressed on Windows,linux or ChromeOs
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        // access the input element and call its focus method
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleSearchInputChange = (event) => {
    const title = event.target.value;

    setTitle(title);

    if (title.trim() !== "") {
      const filteredNotesByTitle = notes.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase()),
      );

      setFilteredNotes(filteredNotesByTitle);
    } else {
      setFilteredNotes(notes);
    }
  };

  /**
   * display shortcut to use to focus the input search field
   * @returns {React.JSX.Element|null}
   */
  const displayShortcut = () => {
    if (!navigator.userAgentData?.mobile) {
      if (navigator.userAgentData?.platform?.toLowerCase().includes("macos")) {
        return (
          <>
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </>
        );
      } else if (
        navigator.userAgentData?.platform?.toLowerCase().includes("windows") ||
        navigator.userAgentData?.platform?.toLowerCase().includes("linux") ||
        navigator.userAgentData?.platform?.toLowerCase().includes("chromeos")
      ) {
        return (
          <>
            <kbd className="kbd kbd-sm">Ctrl</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </>
        );
      } else {
        return null;
      }
    }
  };

  return (
    <div className="text-lg shadow-sm navbar  sm:text-xl bg-[#172A36] ">
      <div className="navbar-start w-[10%]  ">
        <div className="dropdown  ">
          <div tabIndex={0} role="button" className="mx-2 btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
              {" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="py-4 grid grid-cols-1 px-4 my-4 mt-3 space-y-8 text-[#2D4453] hover:text-white border rounded-b-lg shadow w-[300px] bg-white menu menu-sm dropdown-content z-1 border-[#475E6B] overflow-x-scroll h-[500px] "
          >
            <Link
              className="text-lg text-[#2D4453]  hover:py-6 hover:bg-[#2D4453] btn btn-ghost hover:text-white"
              to="/"
            >
              Home
            </Link>

            {/*for the dropdown menu*/}

            {notes.map((note, index) => (
              <Link
                className="text-lg text-[#2D4453]  hover:py-6 hover:bg-[#2D4453] btn btn-ghost hover:text-white border-1  border-y-[#2D4453]  "
                key={index}
                to={`/note/${note.id}`}
              >
                {note.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="navbar-center  flex flex-col sm:flex-row justify-center sm:justify-between gap-4 space-y-4 sm:space-y-0   space-x-4 py-4 sm:space-x-0 mx-auto sm:w-[90%] divide divide-y-1 divide-white sm:divide-y-none">
        <Link to="/">NoteKeeper</Link>
        {/*<input*/}
        {/*  onChange={handleSearchInputChange}*/}
        {/*  type="text"*/}
        {/*  name="title"*/}
        {/*  value={title}*/}
        {/*  placeholder="Search"*/}
        {/*  className="input input-bordered  w-auto rounded-full"*/}
        {/*/>*/}

        <label className="input  input-bordered  w-auto rounded-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            ref={inputRef}
            onChange={handleSearchInputChange}
            name="title"
            value={title}
            type="search"
            className="grow "
            placeholder="Search"
          />

          {/*display shortcut to focus input search field for desktop devices only*/}
          {displayShortcut()}
        </label>
      </div>
      {/*<div className=" navbar-end ">*/}
      {/*  <ul className="justify-around gap-6 px-4 text-xl menu menu-horizontal">*/}
      {/*    <Link className="text-xl btn btn-ghost" to="/">*/}
      {/*      Home*/}
      {/*    </Link>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  );
};
export default Header;
