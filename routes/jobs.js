const express = require('express');
const router = express.Router();
const {
  getJobs,
  newJob,
  getJobsInRadius,
  updateJob,
  deleteJob,
} = require('../controllers/jobsController');

router.route('/jobs').get(getJobs);
router.route('/jobs/:zipcode/:distance').get(getJobsInRadius);

router.route('/jobs/new').post(newJob);

router.route('/jobs/:id').put(updateJob).delete(deleteJob);
module.exports = router;
