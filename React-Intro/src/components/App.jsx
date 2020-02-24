import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setNotes] = useState([]);

  function addNote(inputNote) {
    setNotes(prevItems => {
      return [...prevItems, inputNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevItems => {
      return prevItems.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {allNotes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onClicked={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
