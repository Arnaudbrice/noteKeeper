import React, {useContext} from 'react'
import {Link} from "react-router";
import NoteContext from "../context/NoteContext.jsx";


const Header = () => {
  const {notes, setNotes} = useContext(NoteContext);

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

            {notes.map((note, index) => (
              <Link
                className="text-lg text-[#2D4453]  hover:py-6 hover:bg-[#2D4453] btn btn-ghost hover:text-white"
                key={index}
                to={`/note/:${note.id}`}
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
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered  w-auto rounded-full"
        />
      </div>
      {/*<div className=" navbar-end ">*/}
      {/*  <ul className="justify-around gap-6 px-4 text-xl menu menu-horizontal">*/}
      {/*    <Link className="text-xl btn btn-ghost" to="/">*/}
      {/*      Home*/}
      {/*    </Link>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>

  )
}
export default Header
