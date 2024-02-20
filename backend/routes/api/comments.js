/**
 * Express router for handling comments API endpoints.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/**
 * GET /api/comments
 * Retrieves all comments.
 * @name GET/api/comments
 * @function
 * @memberof module:routes/api/comments
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response containing the comments.
 */
router.get("/", (req, res) => {
    Comment.find()
        .then(comments => {
            res.json({ comments });
        })
        .catch(err => {
            console.log(err);
        });
});

/**
 * DELETE /api/comments/:id
 * Deletes a comment by its ID.
 * @name DELETE/api/comments/:id
 * @function
 * @memberof module:routes/api/comments
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - JSON response indicating the success of the deletion.
 */
router.delete("/:id", async (req, res) => {
        try {
                await Comment.findByIdAndRemove(req.params.id);
                res.json({ success: true });
        } catch (err) {
                console.log(err);
        }
});
