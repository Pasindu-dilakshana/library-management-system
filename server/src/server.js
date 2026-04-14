import "express-async-errors";
import dotenv from "dotenv";
import app from "./app.js";
import { connectDatabase } from "./config/database.js";
import { logger } from "./utils/logger.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    logger.info(`API server running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  logger.error(`Startup failed: ${error.message}`);
  process.exit(1);
});
