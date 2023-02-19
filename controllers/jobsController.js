// Get all Jobs => /api/v1/jobs
exports.getJobs = (req, res, next) => {
  res.status(200).json({
    success: true,
    requestUrl: req.requestUrl,
    message: 'this route will display all job in future',
  });
};
