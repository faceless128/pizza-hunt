const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:pizzaId')
  .post(addComment);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);

module.exports = router;