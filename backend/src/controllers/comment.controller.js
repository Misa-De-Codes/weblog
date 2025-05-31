import { Comment } from '../models/comments.js';
import APIResponse from '../utils/APIResponse.js';

const getAllComments = async (req, res) => {
    try {
        const { blogId } = req.params;
        if (!blogId || blogId.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Blog ID is required.'))

        const comments = await Comment.find({ blog: blogId }).select('-__v').limit()

        if (!comments || comments.length === 0) return res.status(202)
            .json(new APIResponse(202, "This blog has no comments.", comments))

        return res.status(200)
            .json(new APIResponse(200, `Total ${comments.length} comments found.`, comments))

    } catch (error) {
        return res.status(500)
            .json(new APIResponse(500, `${error}`))
    }
}

const createComment = async (req, res) => {
    try {
        const { body, author, blog } = req.body || {};
        if (!body || body.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Body is required.'))

        const newComment = new Comment({
            body,
            author,
            blog
        });
        const createdComment = (await newComment.save()).toObject();
        delete createdComment.__v;

        return res.status(201)
            .json(new APIResponse(201, 'Comment created successfully.', createdComment));

    } catch (error) {
        return res.status(500)
            .json(new APIResponse(500, `${error}`));
    }
}

// not  sure if this is needed, but keeping it for now
// This function is not used in the router, but it can be useful for fetching a single comment by ID.
const getCommentById = async (req, res, next) => {
    res.send('get one comments')

}

const updateCommentById = async (req, res) => {
    try {
        const { commentId } = req.params;
        if (!commentId || commentId.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Comment ID is required.'))

        const { body } = req.body || {};
        if (!body || body.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Body is required.'))

        const updatedComment = await Comment.findByIdAndUpdate(
            commentId,
            { body },
            { new: true, runValidators: true }
        ).select('-__v');

        if (!updatedComment) return res.status(404)
            .json(new APIResponse(404, 'Comment not found.'));

        return res.status(200)
            .json(new APIResponse(200, 'Comment updated successfully.', updatedComment));

    } catch (error) {
        return res.status(500)
            .json(new APIResponse(500, `${error}`));
    }
}

const deleteCommentById = async (req, res) => {
    try {
        const { commentId } = req.params;
        if (!commentId || commentId.trim() === '') return res.status(404)
            .json(new APIResponse(404, 'Comment ID is required.'))

        const deletedComment = await Comment.findByIdAndDelete(commentId).select('-__v');

        if (!deletedComment) return res.status(404)
            .json(new APIResponse(404, 'Comment does not exist.'));
        return res.status(200)
            .json(new APIResponse(200, 'Comment deleted successfully.', deletedComment));

    } catch (error) {
        return res.status(500)
            .json(new APIResponse(500, `${error}`));
    }
}











export {
    getAllComments,
    createComment,
    getCommentById,
    updateCommentById,
    deleteCommentById,
}