const router = require('express').Router();

const {
  checkAuth,
  updateStory,
  deleteStory,
  uploadStory,
} = require('../controllers');

const { asyncHandler } = require('../controllers/middlewares');

router.use(asyncHandler(checkAuth));

router
  .route('/story')
  .post(asyncHandler(uploadStory))
  .put(asyncHandler(updateStory))
  .delete(asyncHandler(deleteStory));

module.exports = router;
