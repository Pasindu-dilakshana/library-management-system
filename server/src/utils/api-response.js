export const sendResponse = (response, statusCode, message, data = {}) => {
  response.status(statusCode).json({
    success: true,
    message,
    data
  });
};
