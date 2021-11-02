const router = require('express').Router();

const {
  checkAuth,
  updateStory,
  deleteStory,
  uploadStory,
} = require('../controllers');

const { asyncHandler } = require('../controllers/middlewares');

router.use(asyncHandler(checkAuth));

router.post('/story', asyncHandler(uploadStory));

router
  .route('/story/:storyId')
  .put(asyncHandler(updateStory))
  .delete(asyncHandler(deleteStory));

module.exports = router;
