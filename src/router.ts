import express from "express";
import {
  getUsers,
  createUser
} from "./controllers/user.controller";
import {
  getMeetings,
  createMeeting
} from "./controllers/meeting.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, Welcome to TypeScript API" });
});

// GET /notes -> Gets all notes.
router.get("/meetings/all", getMeetings);
// POST /notes -> Creates a new note.
router.post("/meetings/new", createMeeting);



// GET /notes -> Gets all notes.
router.get("/users/all", getUsers);
// POST /notes -> Creates a new note.
router.post("/users/new", createUser);

export default router;
