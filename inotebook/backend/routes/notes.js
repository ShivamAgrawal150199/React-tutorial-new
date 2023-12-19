const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { query, validationResult, body } = require("express-validator");

// Route 1 : fetch notes using GET /api/notes/fetchallnotes. No login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  // obj={
  //     a:'this',
  //     number:34
  // }
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

// Route 2 : insert note using POST /api/notes/addnote. No login required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid name").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // if there are errors return all of them
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      })

      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "some error occured" });
    }
  }
);


// Route 3 : update an existing note using PUT /api/notes/updatenote. No login required

router.put(
    "/updatenote/:id",
    fetchuser,
    [
      body("title", "Enter a valid name").isLength({ min: 3 }),
      body("description", "Enter a valid description").isLength({ min: 5 }),
    ],
    async (req, res) => {

        const {title, description,tag}=req.body;
        const newnote={};
        if(title) newnote.title=title;
        if(description) newnote.description=description;
        if(tag) newnote.tag=tag;
        
        let note=await Note.findById(req.params.id);
        if(!note)
        {
            return res.status(404).send("not found");
        }

        if(note.user.toString()!== req.user.id)
        {
            return res.status(401).send("not allowed");
        }

        note=await Note.findByIdAndUpdate(req.params.id , { $set : newnote} ,{new:true} );

        return res.json(note);
    }
)


module.exports = router;
