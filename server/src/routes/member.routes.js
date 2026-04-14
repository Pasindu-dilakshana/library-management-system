import { Router } from "express";
import {
  getMemberProfile,
  getMembers
} from "../controllers/member.controller.js";
import { authenticate, authorize } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 * /api/members/{memberId}:
 *   get:
 *     summary: Get member profile
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 */
router.use(authenticate, authorize("admin"));
router.get("/", getMembers);
router.get("/:memberId", getMemberProfile);

export default router;
