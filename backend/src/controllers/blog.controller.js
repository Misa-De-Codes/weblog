import { Blog } from "../models/blog.model.js"
import APIResponse from '../utils/APIResponse.js'

// get all is working but needs to be optimised
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).select('-__v').limit(15)
            .populate({
                path: 'author',
                select: '-refreshToken -password -__v'
            }).lean().exec()

        if (!blogs || blogs.length === 0) return res.status(404)
            .json(new APIResponse(404, "Unable to get the blogs.", blogs))

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

        const blog = await Blog.findById(id).select('-__v')
            .populate({
                path: 'author',
                select: '-refreshToken -password -__v'
            }).lean().exec()

        if (!blog || blog.length === 0) return res.status(404)
            .json(new APIResponse(404, "Blog doesn't exists."))

        return res.status(200)
            .json(new APIResponse(200, 'Blog found.', blog))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}


const createBlog = async (req, res) => {
    try {
        const { title, body, genra = '' } = req.body

        if (!title || title.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Title is required.'))

        if (!body || body.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Body is required.'))


        const blog = new Blog({
            title, body, genra, author: req.user._id
        })

        const savedBlog = (await blog.save())
        await savedBlog.populate({
                path: 'author',
                select: '-refreshToken -password -__v'
            })

        const createdBlog = savedBlog.toObject()
        delete createdBlog.__v

        return res.status(200)
            .json(new APIResponse(200, 'Blog created.', createdBlog))

    } catch (error) {
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}

const updateBlog = async (req, res) => {
    try {
        const id = req.params?.id
        if (!id) return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const { title, body, genra } = req.body

        if (!title || title.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Title is required.'))

        if (!body || body.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Body is required.'))

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, body, genra, },
            { new: true, runValidators: true }
        ).select('-__v')
            .populate({
                path: 'author',
                select: '-refreshToken -password -__v'
            }).lean().exec()

        if (!updatedBlog || updatedBlog.length === 0) return res.status(404)
            .json(new APIResponse(404, 'Blog blog does not exists.'))

        return res.status(200)
            .json(new APIResponse(200, 'Blog updated successfully.', updatedBlog))

    } catch (error) {
        console.log(error)
        return res.status(404)
            .json(new APIResponse(404, `${error}`))
    }
}

const deleteBlog = async (req, res) => {
    try {
        const id = req.params?.id
        if (!id) return res.status(404)
            .json(new APIResponse(404, "Params are missing!"))

        const deletedBlog = await Blog.findByIdAndDelete(id).select('-refreshToken -password -__v')

        if (deletedBlog || deletedBlog.length === 0) return res.status(200)
            .json(new APIResponse(200, 'Blog deleted successfully.', deletedBlog))

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