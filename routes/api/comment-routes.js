const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router.route('/:pizzaId').post(addComment);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;