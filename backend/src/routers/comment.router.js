import express from "express";
import { getAllComments, createComment, getCommentById, updateCommentById, deleteCommentById } from "../controllers/comment.controller.js";
import verifyAccess from "../middlewares/verifyAccess.js";

const router = express.Router()

router.get('/:blogId', getAllComments);
router.post('/:blogId', verifyAccess, createComment);

//router.get('/:blogId/:id', verifyAccess, getCommentById);

router.patch('/:commentId', verifyAccess, updateCommentById);
router.delete('/:commentId', verifyAccess, deleteCommentById);

export default router;