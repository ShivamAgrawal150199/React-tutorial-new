import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

    const notesinitial=[
        {
          "_id": "65817f25cdb8c29053db1e236",
          "user": "6580672398cc5c56882c46ad",
          "title": "my first note",
          "description": "this is first description",
          "tag": "tag 1",
          "date": "2023-12-19T11:31:49.115Z",
          "__v": 0
        },
        {
            "_id": "65817f25cdb8c29053db1e231",
            "user": "6580672398cc5c56882c46ad",
            "title": "my first note",
            "description": "this is first description",
            "tag": "tag 1",
            "date": "2023-12-19T11:31:49.115Z",
            "__v": 0
          },
          {
            "_id": "65817f25cdb8c29053db1e232",
            "user": "6580672398cc5c56882c46ad",
            "title": "my first note",
            "description": "this is first description",
            "tag": "tag 1",
            "date": "2023-12-19T11:31:49.115Z",
            "__v": 0
          },
          {
              "_id": "65817f25cdb8c29053db1e233",
              "user": "6580672398cc5c56882c46ad",
              "title": "my first note",
              "description": "this is first description",
              "tag": "tag 1",
              "date": "2023-12-19T11:31:49.115Z",
              "__v": 0
            },
            {
                "_id": "65817f25cdb8c29053db1e234",
                "user": "6580672398cc5c56882c46ad",
                "title": "my first note",
                "description": "this is first description",
                "tag": "tag 1",
                "date": "2023-12-19T11:31:49.115Z",
                "__v": 0
              },
              {
                  "_id": "65817f25cdb8c29053db1e235",
                  "user": "6580672398cc5c56882c46ad",
                  "title": "my first note",
                  "description": "this is first description",
                  "tag": "tag 1",
                  "date": "2023-12-19T11:31:49.115Z",
                  "__v": 0
                }
      ]

      const[notes,setNotes]=useState(notesinitial);

      // ADD A NOTE

      const addNote=(title , description , tag)=>{
        // TODO API CALL
        console.log("adding a new note")
        const note = {
            "_id": "65817f25cdb8c29053db1e2356",
            "user": "6580672398cc5c56882c46ad",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-12-19T11:31:49.115Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
      }

      // EDIT A NOTE

      const editNote=()=>{

      }

      // DELETE A NOTE
      const deleteNote=(id)=>{
        // to do api call
        console.log("deleting note with id "+id);
        const newnote=notes.filter((note)=>{return note._id!==id})
        setNotes(newnote)

      }




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
    <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote}}>
        {props.children}
    </NoteContext.Provider>
    )

}

export default NoteState;