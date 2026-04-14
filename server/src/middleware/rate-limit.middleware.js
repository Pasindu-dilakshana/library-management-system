import { RateLimiterMemory } from "rate-limiter-flexible";
import { StatusCodes } from "http-status-codes";

const rateLimiter = new RateLimiterMemory({
  points: 100,
  duration: 60
});

export const apiRateLimiter = async (request, response, next) => {
  try {
    await rateLimiter.consume(request.ip);
    next();
  } catch (_error) {
    response.status(StatusCodes.TOO_MANY_REQUESTS).json({
      success: false,
      message: "Too many requests. Please try again later."
    });
  }
};
