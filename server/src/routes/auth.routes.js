import { Router } from "express";
import {
  getCurrentUser,
  login,
  register
} from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 * /api/auth/login:
 *   post:
 *     summary: Login with email and password
 *     tags: [Auth]
 * /api/auth/me:
 *   get:
 *     summary: Get currently authenticated user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 */
router.post("/register", register);
router.post("/login", login);
router.get("/me", authenticate, getCurrentUser);

export default router;
