import express from "express";
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from "../controllers/blog.controller.js";
import verifyAccess from "../middlewares/verifyAccess.js";

const router = express.Router()

router.route('/')
.get(getAllBlogs)
.post(verifyAccess, createBlog);

router.route('/:id')
.get(verifyAccess, getBlogById)
.patch(verifyAccess, updateBlog)
.delete(verifyAccess, deleteBlog);



export default router;