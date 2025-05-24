import { Blog } from "../models/blog.model.js"
import APIResponse from '../utils/APIResponse.js'

// get all is working but needs to be optimised
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).limit(15).lean()

        if (!blogs) {
                  return res.status(404)
            .json(new APIResponse(404, "Unable to get the blogs.", blogs))
        }

        return res.status(200)
            .json(new APIResponse(200, 'Blogs are here!.', blogs))

    } catch (error) {
        console.log(error)
        return res.status(500)
            .json(new APIResponse(500, `${error}`))
    }
}
// to shear the info of a posty
const getBlogById = async (req, res) => {
    try {
        const id = req.params?.id
        if (!id) return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const blog = await Blog.findById(id).lean()

        if (!blog) {
            return res.status(404)
                .json(new APIResponse(404, "Blog doesn't exists."))
        }

        return res.status(200)
            .json(new APIResponse(200, 'Blog found.', blog))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}

// save is done for now
const createBlog = async (req, res) => {
    try {
        const { title, body, genra = '' } = req.body

        if (!title || title.trim() === '') {
            return res.status(404)
                .json(new APIResponse(404, 'Title is required.'))
        }
        if (!body || body.trim() === '') {
            return res.status(404)
                .json(new APIResponse(404, 'Body is required.'))
        }

        const blog = new Blog({
            title, body, genra, author: req.user._id
        })

        const createdBlog = (await blog.save()).toObject()
        return res.status(200)
            .json(new APIResponse(200, 'Blog created.', createdBlog))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}

// update one is done 
const updateBlog = async (req, res) => {
    try {
        const id = req.params?.id
        if (!id) return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const { title, body, genra } = req.body

        if (!title || title.trim() === '') {
            return res.status(404)
                .json(new APIResponse(404, 'Title is required.'))
        }
        if (!body || body.trim() === '') {
            return res.status(404)
                .json(new APIResponse(404, 'Body is required.'))
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, body, genra, },
            { new: true, runValidators: true }
        ).lean()

        return res.status(200)
            .json(new APIResponse(200, 'Blog updated successfully.', updatedBlog))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}

//delete blog done
const deleteBlog = async (req, res) => {
    try {
        const id = req.params?.id
        if (!id) return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const deletedBlog = await Blog.findByIdAndDelete(id)

        if (deletedBlog) {
            return res.status(200)
                .json(new APIResponse(200, 'Blog deleted successfully.', deletedBlog))
        }

        return res.status(404)
            .json(new APIResponse(404, 'Blog delete unsuccessfull. Blog does not esists!'))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}




export {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
}  