import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
    createNote,
    deleteNote,
    getAllNotes,
    getNoteById,
    getNoteBySearch,
    sharedWith,
    updateNote,
} from "../controller/notesController.js";

const router = express.Router();

router.get("/", userAuth, getAllNotes);
router.get("/search", userAuth, getNoteBySearch);
router.get("/:id", userAuth, getNoteById);

router.post("/", userAuth, createNote);
router.post("/:id/share", userAuth, sharedWith);

router.put("/:id", userAuth, updateNote);

router.delete("/", userAuth, deleteNote);

export default router;
