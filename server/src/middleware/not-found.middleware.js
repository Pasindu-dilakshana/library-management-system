import { StatusCodes } from "http-status-codes";

export const notFound = (_request, response) => {
  response.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Route not found"
  });
};
