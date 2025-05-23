import { Blog } from "../models/blog.model.js"

const getAllBlogs = async(req, res) => {
    res.send("post: get  all blog")

    try {
        





        
    } catch (error) {
     console.log(error)   
    }
}

const getBlogById = (req, res) => {
    res.send("post: get one blog")
}


const createBlog = async(req, res) => {
    try {
        const { title, body, genra } = req.body
        const user = req.user



        const blog = new Blog({
            title, body, genra, author: user._id
        })

        await blog.save()

        console.log(blog)
        
    } catch (error) {
     console.log(error)   
    }
}

const updateBlog = (req, res) => {
    res.send("post: update")
} 


const deleteBlog = (req, res) => { 
    res.send("post: delete")
}




export {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
}  