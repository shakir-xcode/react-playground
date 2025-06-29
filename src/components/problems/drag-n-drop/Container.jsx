import React, { useCallback, useRef, useState } from "react";
import Note from "./Note";

const MARGIN_LEFT = 32;
const MARGIN_TOP = 184;

const Container = () => {
  const [notes, setNotes] = useState([
    { id: 1, data: "This is note one", top: 0, left: 0 },
    { id: 2, data: "This is note two", top: 100, left: 100 },
  ]);
  const [draggableNoteId, setDraggableNoteId] = useState(null);
  const itemRef = useRef();

  const handleMouseDown = (id, e) => {
    setDraggableNoteId(id);
    itemRef.current = e.target.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    if (draggableNoteId === null) return;

    setNotes((notes) => {
      const updatedNotes = notes.map((note) => {
        if (note.id === draggableNoteId) {
          return {
            ...note,
            top: e.clientY - MARGIN_TOP - itemRef.current.height / 2,
            left: e.clientX - MARGIN_LEFT - itemRef.current.width / 2,
          };
        }
        return note;
      });
      return updatedNotes;
    });
  };

  const handleMouseUp = () => {
    setDraggableNoteId(null);
  };

  return (
    <div>
      <h2>Container</h2>

      <div
        className="relative flex flex-col gap-3 border h-[400px]"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {notes.map((note) => (
          <Note
            handleMouseDown={(e) => handleMouseDown(note.id, e)}
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
