import Notes from "../models/notesModel.js";
import User from "../models/userModel.js";

export const getAllNotes = async (req, res, next) => {
    try {
        const notes = await Notes.find({});
        res.status(200).json({ notes });
    } catch (error) {
        next({ msg: error.message });
    }
};

export const getNoteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const note = await Notes.findById(id);
        if (!note) next({ msg: "no note with this id exists", status: 404 });

        res.status(200).json({ note });
    } catch (error) {
        next({ msg: error.message });
    }
};

export const getNoteBySearch = async (req, res, next) => {
    const { q } = req.query;

    const notes = await Notes.find({
        title: {
            $regex: new RegExp(q),
        },
    });

    res.status(200).json(notes);
};

export const createNote = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const author = req.user.userId;
        if (!title) return next({ msg: "title is required", status: 401 });
        if (!content) return next({ msg: "content is required", status: 401 });

        const newNote = new Notes({
            title,
            content,
            author,
        });

        const savedNote = await newNote.save();

        res.status(201).json({ note: savedNote });
    } catch (error) {
        next({ msg: error.message });
    }
};

export const updateNote = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { title, content } = req.body;
        const id = req.params.id;
        if (!title) return next({ msg: "title is required", status: 401 });
        if (!content) return next({ msg: "content is required", status: 401 });

        const note = await Notes.findById(id);

        if (!note) return next({ msg: "no note found", status: 404 });

        if (note.author != userId) return next({ msg: "you are not authorized", status: 401 });

        note.title = title;
        note.content = content;

        const updatedNote = await note.save();

        res.status(200).json({ updatedNote });
    } catch (error) {
        next({ msg: error.message });
    }
};

export const sharedWith = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const id = req.params.id;
        const sharedUserId = req.body.userId;
        if (!sharedUserId) return next({ msg: "no user id found", status: 400 });

        const sharedUser = await User.findById(sharedUserId);

        if (!sharedUser) return next({ msg: "no user found", status: 404 });

        const note = await Notes.findById(id);

        if (!note) return next({ msg: "no note found", status: 404 });

        if (note.author != userId) return next({ msg: "you are not authorized", status: 401 });

        note.sharedWith.push(sharedUserId);

        const updatedNote = await note.save();

        res.status(200).json(updatedNote);
    } catch (error) {
        next({ msg: error.message });
    }
};

export const deleteNote = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { noteId } = req.body;

        const note = await Notes.findById(noteId);

        if (note.author != userId) return next({ msg: "you are not authorized", status: 401 });

        await Notes.findByIdAndDelete(noteId);

        res.status(200).json({ msg: "note deleted successfully" });
    } catch (error) {
        return next({ msg: error.message });
    }
};
