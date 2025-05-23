import express from "express";
import { getAllComments, createComment, getCommentById, updateCommentById, deleteCommentById } from "../controllers/comment.controller.js";
import verifyAccess from "../middlewares/verifyAccess.js";

const router = express.Router()

router.route('/')
.get(getAllComments)
.post(verifyAccess, createComment);

router.route('/:id')
.get(verifyAccess, getCommentById)
.put(verifyAccess, updateCommentById)
.delete(verifyAccess, deleteCommentById);



export default router;