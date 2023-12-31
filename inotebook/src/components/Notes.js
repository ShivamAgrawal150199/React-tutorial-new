import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes, addNote,getNote } = context;
  useEffect(()=>{
    getNote()
    // eslint-disable-next-line
  },[])

 
  const[note, setNote]=useState({title:"",description:"",tag:"default"});

  const updateNote=(currentNote)=>{
    ref.current.click()
    setNote({etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
  }

  const ref=useRef(null);

  const handleClick=(e)=>{
    e.preventDefault();
    console.log("updating note ",note)
    addNote(note.title,note.description,note.tag)
  }

  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value});

  }
  return (
    <>
    <AddNote/>

    {/* <!-- Button trigger modal --> */}
<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
        <form>
        
        <div className="mb-3">
          <label htmlFor="etitle" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle }aria-describedby="emailHelp" onChange={onchange}/>
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onchange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label">
            Tag
          </label>
          <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onchange}/>
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
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleClick} className="btn btn-primary">Update note</button>
      </div>
    </div>
  </div>
</div>


    <div className="row my-3">
      <h2>Your notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} updateNote={updateNote} note={note}/>
      })}
    </div>
    </>
  );
};

export default Notes;
