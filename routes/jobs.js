const express = require('express');
const router = express.Router();
const {
  getJobs,
  newJob,
  getJobsInRadius,
  updateJob,
  deleteJob,
  getJob,
  jobStats,
} = require('../controllers/jobsController');

router.route('/jobs').get(getJobs);
router.route('/jobs/:id/:slug').get(getJob);
router.route('/jobs/:zipcode/:distance').get(getJobsInRadius);
router.route('/stats/:topic').get(jobStats);

router.route('/jobs/new').post(newJob);

router.route('/jobs/:id').put(updateJob).delete(deleteJob);
module.exports = router;
