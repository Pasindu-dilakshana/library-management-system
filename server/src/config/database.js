import mongoose from "mongoose";
import { logger } from "../utils/logger.js";

export const connectDatabase = async () => {
  const databaseUri = process.env.MONGODB_URI;

  if (!databaseUri) {
    throw new Error("MONGODB_URI is not configured");
  }

  await mongoose.connect(databaseUri);
  logger.info("MongoDB connected successfully");
};
