import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/app-error.js";

export const authenticate = (request, _response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError("Authentication token is missing", StatusCodes.UNAUTHORIZED);
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    request.user = payload;
    next();
  } catch (_error) {
    throw new AppError("Invalid or expired token", StatusCodes.UNAUTHORIZED);
  }
};

export const authorize = (...roles) => (request, _response, next) => {
  if (!roles.includes(request.user.role)) {
    throw new AppError("You do not have access to this resource", StatusCodes.FORBIDDEN);
  }

  next();
};
