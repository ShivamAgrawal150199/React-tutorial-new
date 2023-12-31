import React, { useState } from 'react'
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {

    const context = useContext(noteContext);
  const { addNote } = context;
 
  const[note, setNote]=useState({title:"",description:"",tag:""});
  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag)
    setNote({title:"",description:"",tag:""})
    props.showAlert("added Successfully","success")

  }

  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value});

  }

  return (
    <div>
      <h2>Add notes</h2>
      <div className="container my-3">
      <form>
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  value={note.title} onChange={onchange}/>
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onchange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange}/>
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
      </div>
    </div>
  )
}

export default AddNote
