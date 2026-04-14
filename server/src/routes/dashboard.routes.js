import { Router } from "express";
import { getDashboardSummary } from "../controllers/dashboard.controller.js";
import { authenticate, authorize } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get admin dashboard summary
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 */
router.get("/", authenticate, authorize("admin"), getDashboardSummary);

export default router;
