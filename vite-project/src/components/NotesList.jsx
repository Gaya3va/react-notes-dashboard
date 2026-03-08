import { useContext, useMemo,useState } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesList = () => {

  const { notes } = useContext(NotesContext);
  const [selected, setSelected] = useState(null);

  const totalNotes = useMemo(() => {
    return notes.length;
  }, [notes]);

  return (
    <div>
      <h3>Total Notes: {totalNotes}</h3>

      <ul>
        {notes.map((note, index) => (
          <li key={index}
              onClick = {() => setSelected(index)}
              style={{
                 margin:"5px 0",
                 background: selected === index ? "#ffeaa7" : "transparent",
                 borderRadius: "5px",
                 cursor: "pointer",
                 padding: "8px",
            }}>
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;