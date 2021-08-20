import React, { useState } from "react";
import AddIcon from "@material-ui/icons/AddBox";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [tap, setTap] = useState(false);
  const [Note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function sumbitNote(e) {
    props.onAdd(Note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
    setTap(false);
  }
  function expand() {
    setTap(true);
  }

  return (
    <div>
      <form className="create-note">
        {tap && (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={Note.title}
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={tap ? "3" : "1"}
          value={Note.content}
        />
        <Zoom in={true}>
          <Fab onClick={sumbitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
