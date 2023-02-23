const User = require('../models/users');
const catchAsyncErrors = require('../middlewares/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');

// Register a new user => /api/v1/register

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  // Create JWT Token
  const token = user.getJwtToken();

  res.status(200).json({
    success: true,
    message: 'User registered successfully',
    token,
    user: user,
  });
});

// Login user => /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // Checks if email and password is entered by user
  if (!email || !password) {
    return next(new ErrorHandler('Please enter email & password', 400));
  }

  // Finding user in database
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorHandler('Invalid Email', 401));
  }

  // Checks if password is correct or not
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid Password', 401));
  }

  // Create JWT Token
  const token = user.getJwtToken();
  res.status(200).json({
    success: false,
    token,
  });
});
