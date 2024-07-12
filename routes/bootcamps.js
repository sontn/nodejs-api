const express = require('express');

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadus,
} = require('../controllers/bootcamps');

const { getCourses } = require('../controllers/courses');

const router = express.Router();

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadus);
router.route('/:bootcampId/courses').get(getCourses);

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
