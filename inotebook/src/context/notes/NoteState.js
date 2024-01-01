import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesinitial = [];
  //   {
  //     _id: "65817f25cdb8c29053db1e236",
  //     user: "6580672398cc5c56882c46ad",
  //     title: "my first note",
  //     description: "this is first description",
  //     tag: "tag 1",
  //     date: "2023-12-19T11:31:49.115Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "65817f25cdb8c29053db1e231",
  //     user: "6580672398cc5c56882c46ad",
  //     title: "my first note",
  //     description: "this is first description",
  //     tag: "tag 1",
  //     date: "2023-12-19T11:31:49.115Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "65817f25cdb8c29053db1e232",
  //     user: "6580672398cc5c56882c46ad",
  //     title: "my first note",
  //     description: "this is first description",
  //     tag: "tag 1",
  //     date: "2023-12-19T11:31:49.115Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "65817f25cdb8c29053db1e233",
  //     user: "6580672398cc5c56882c46ad",
  //     title: "my first note",
  //     description: "this is first description",
  //     tag: "tag 1",
  //     date: "2023-12-19T11:31:49.115Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "65817f25cdb8c29053db1e234",
  //     user: "6580672398cc5c56882c46ad",
  //     title: "my first note",
  //     description: "this is first description",
  //     tag: "tag 1",
  //     date: "2023-12-19T11:31:49.115Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "65817f25cdb8c29053db1e235",
  //     user: "6580672398cc5c56882c46ad",
  //     title: "my first note",
  //     description: "this is first description",
  //     tag: "tag 1",
  //     date: "2023-12-19T11:31:49.115Z",
  //     __v: 0,
  //   },
  // ];

  const [notes, setNotes] = useState(notesinitial);

  
  const getNote = async () => {
    // TODO API CALL
    console.log('here')
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MDY3MjM5OGNjNWM1Njg4MmM0NmFkIn0sImlhdCI6MTcwMjk4MjQyNn0.7rVFtUBnTs0rV3qf7r7XWz1xX65pWzzLABBhDyi7hlY',
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    setNotes(json);

  };

  // ADD A NOTE
  const addNote = async (title, description, tag) => {
    // TODO API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MDY3MjM5OGNjNWM1Njg4MmM0NmFkIn0sImlhdCI6MTcwMjk4MjQyNn0.7rVFtUBnTs0rV3qf7r7XWz1xX65pWzzLABBhDyi7hlY",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });
    const note = await response.json(); // parses JSON response into native JavaScript objects
    console.log(note);

    console.log("adding a new note");
    // const note = {
    //   _id: "65817f25cdb8c29053db1e2356",
    //   user: "6580672398cc5c56882c46ad",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2023-12-19T11:31:49.115Z",
    //   __v: 0,
    // };
    setNotes(notes.concat(note));
  };

  // EDIT A NOTE

  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MDY3MjM5OGNjNWM1Njg4MmM0NmFkIn0sImlhdCI6MTcwMjk4MjQyNn0.7rVFtUBnTs0rV3qf7r7XWz1xX65pWzzLABBhDyi7hlY",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json)

    // logic for Editing in client
    const newNotes=await JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // DELETE A NOTE
  const deleteNote = async (id) => {
    // to do api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MDY3MjM5OGNjNWM1Njg4MmM0NmFkIn0sImlhdCI6MTcwMjk4MjQyNn0.7rVFtUBnTs0rV3qf7r7XWz1xX65pWzzLABBhDyi7hlY",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);

    console.log("deleting note with id " + id);
    const newnote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnote);
  };

  // const s1={
  //     "name":"Shivam",
  //     "class":"5b"
  // }

  // const[state, setState]=useState(s1);           for understanding purpose of use context with use effect

  // const update=()=>{
  //     setTimeout(() => {
  //         setState({
  //             "name":"agrawal",
  //             "class":"10b"
  //         })

  //     }, 1000);
  // }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote , getNote ,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
