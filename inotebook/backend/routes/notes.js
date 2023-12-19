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

module.exports = router;
