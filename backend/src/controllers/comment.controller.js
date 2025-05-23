const getAllComments = async(req, res, next) => {
    res.send('all comments')
}

const createComment = async(req, res, next) => {
    res.send('create comments')

}

const getCommentById = async(req, res, next) => {
    res.send('get one comments')

}

const updateCommentById = async(req, res, next) => {
    res.send('update comments')

}

const deleteCommentById = async(req, res, next) => {
    res.send('delete comments')

}











export { getAllComments, createComment, getCommentById, updateCommentById, deleteCommentById,  }