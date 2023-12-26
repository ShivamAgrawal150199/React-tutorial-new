import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

    const notesinitial=[
        {
          "_id": "65817f25cdb8c29053db1e23",
          "user": "6580672398cc5c56882c46ad",
          "title": "my first note",
          "description": "this is first description",
          "tag": "tag 1",
          "date": "2023-12-19T11:31:49.115Z",
          "__v": 0
        },
        {
            "_id": "65817f25cdb8c29053db1e23",
            "user": "6580672398cc5c56882c46ad",
            "title": "my first note",
            "description": "this is first description",
            "tag": "tag 1",
            "date": "2023-12-19T11:31:49.115Z",
            "__v": 0
          },
          {
            "_id": "65817f25cdb8c29053db1e23",
            "user": "6580672398cc5c56882c46ad",
            "title": "my first note",
            "description": "this is first description",
            "tag": "tag 1",
            "date": "2023-12-19T11:31:49.115Z",
            "__v": 0
          },
          {
              "_id": "65817f25cdb8c29053db1e23",
              "user": "6580672398cc5c56882c46ad",
              "title": "my first note",
              "description": "this is first description",
              "tag": "tag 1",
              "date": "2023-12-19T11:31:49.115Z",
              "__v": 0
            },
            {
                "_id": "65817f25cdb8c29053db1e23",
                "user": "6580672398cc5c56882c46ad",
                "title": "my first note",
                "description": "this is first description",
                "tag": "tag 1",
                "date": "2023-12-19T11:31:49.115Z",
                "__v": 0
              },
              {
                  "_id": "65817f25cdb8c29053db1e23",
                  "user": "6580672398cc5c56882c46ad",
                  "title": "my first note",
                  "description": "this is first description",
                  "tag": "tag 1",
                  "date": "2023-12-19T11:31:49.115Z",
                  "__v": 0
                }
      ]

      const[notes,setNotes]=useState(notesinitial);




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
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
    )

}

export default NoteState;