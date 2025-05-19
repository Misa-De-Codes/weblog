const getAllBlogs = (req, res) => {
    res.send("post: get  all blog")
}

const getBlogById = (req, res) => {
    res.send("post: get one blog")
}


const createBlog = (req, res) => {
    res.send("post: create")
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