import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.routes.js";
import { swaggerSpec } from "./docs/swagger.js";
import bookRoutes from "./routes/book.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import memberRoutes from "./routes/member.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { notFound } from "./middleware/not-found.middleware.js";
import { apiRateLimiter } from "./middleware/rate-limit.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
app.use(helmet());
app.use(apiRateLimiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(mongoSanitize());

app.get("/api/health", (_request, response) => {
  response.status(200).json({
    success: true,
    message: "Library API is healthy"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(notFound);
app.use(errorHandler);

export default app;
