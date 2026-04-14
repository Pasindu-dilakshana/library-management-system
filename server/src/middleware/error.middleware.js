import { StatusCodes } from "http-status-codes";

export const errorHandler = (error, _request, response, _next) => {
  response.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: error.message || "Internal server error"
  });
};
