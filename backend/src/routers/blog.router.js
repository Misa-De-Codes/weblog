import express from "express";
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from "../controllers/blog.controller.js";
import verifyAccess from "../middlewares/verifyAccess.js";

const router = express.Router()

// get   blogs/ = all
// get   blogs/:id = one
// post blogs/:id = one create
// put blogs/:id  = update one
// delete blogs/:id = delete one


router.get('/', getAllBlogs)

router.get('/:id', getBlogById)

router.post('/:id',verifyAccess ,createBlog)

router.put('/:id',verifyAccess, updateBlog)

router.delete('/:id',verifyAccess, deleteBlog)



export default router;