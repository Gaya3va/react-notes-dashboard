import { useState, useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const AddNote = () => {

  const [input, setInput] = useState("");
  const { addNote } = useContext(NotesContext);

  const inputRef = useRef(null);

  // Auto focus input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (!input.trim()) return;

    addNote(input);
    setInput("");
    inputRef.current.focus();
  };

  return (
    <div>
     <input
      ref={inputRef}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter your note"
    />

    <button onClick={handleAdd} disabled={!input.trim()}>
      Add Note
    </button>
  </div>
);
   

};

export default AddNote;