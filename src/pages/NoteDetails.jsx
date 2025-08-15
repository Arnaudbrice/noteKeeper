import React from "react";
import {useParams} from "react-router";

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {solarizedlight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import useNotes from "../hooks/useNotes.jsx";
import NotFound from "./NotFound.jsx";

const NoteDetails = () => {
  const {notes, setNotes, filteredNotes} = useNotes();
  const {noteId} = useParams();


  let findNote = notes.find((note) => note.id === noteId);


  const isCodeBlock = (input) => {


    // Split the text by code blocks
    const parts = input.split(/(```[\s\S]*?```|\*\*[^*]+\*\*)/g); // Matches triple backticks and double asterisks
// Matches triple backticks

    return parts.map((part, index) => {
      if (!part) return null;

      // Check if it's a code block
      if (part.startsWith('```') && part.endsWith('```')) {
        const codeContent = part.slice(3, -3); // Remove the backticks
        return (
          <SyntaxHighlighter className="writespace-pre-wrap " key={index} language="javascript" style={solarizedlight}>
            {codeContent}
          </SyntaxHighlighter>
        );
      }
      // Check for bold text using asterisks
      else if (part.startsWith('**') && part.endsWith('**')) {
        const boldContent = part.slice(2, -2); // Remove the asterisks
        return (
          <strong key={index}>
            {boldContent}
            <br/>
          </strong>
        );
      } else {
        return part.split('\n').map((line, index) =>

          <span key={index}>
        {line}
            <br/>
      </span>)
      }
    });


  };


  console.log("findNote", findNote);

  if (!findNote) {
    return <NotFound/>;
  }
  return (<div
    className="grid grid-cols-1  text-black space-y-4 mt-16  w-full  border-1 border-base-100 py-4 px-4 rounded-lg ">

    <h2 className="font-bold text-center text-lg sm:text-xl bg-base-100 text-white py-4">{findNote.title}</h2>
    <div className="bg-white p-[10px] text-md sm:text-lg  overflow-auto">
      {isCodeBlock(findNote.content)}
    </div>
  </div>);


};
export default NoteDetails;
