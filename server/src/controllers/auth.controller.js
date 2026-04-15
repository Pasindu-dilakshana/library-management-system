import { StatusCodes } from "http-status-codes";
import { User } from "../models/User.js";
import { AppError } from "../utils/app-error.js";
import { sendResponse } from "../utils/api-response.js";
import { generateToken } from "../utils/generate-token.js";

const sanitizeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  status: user.status
});

export const register = async (request, response) => {
  const { name, email, password } = request.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError("User already exists with this email", StatusCodes.BAD_REQUEST);
  }

  const user = await User.create({
    name,
    email,
    password
  });

  const token = generateToken(user._id);

  sendResponse(response, StatusCodes.CREATED, "Account created successfully", {
    token,
    user: sanitizeUser(user)
  });
};

export const login = async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new AppError("Invalid email or password", StatusCodes.UNAUTHORIZED);
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", StatusCodes.UNAUTHORIZED);
  }

  const token = generateToken(user._id);

  sendResponse(response, StatusCodes.OK, "Login successful", {
    token,
    user: sanitizeUser(user)
  });
};

export const getCurrentUser = async (request, response) => {
  const user = await User.findById(request.user.userId);

  sendResponse(response, StatusCodes.OK, "Authenticated user fetched", {
    user: sanitizeUser(user)
  });
};
