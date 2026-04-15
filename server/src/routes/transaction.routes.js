import { Router } from "express";
import {
  getTransactions,
  issueBook,
  returnBook
} from "../controllers/transaction.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 * /api/transactions/issue:
 *   post:
 *     summary: Issue a book to a member
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 * /api/transactions/{transactionId}/return:
 *   patch:
 *     summary: Return an issued book
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 */
router.use(authenticate);
router.get("/", getTransactions);
router.post("/issue", issueBook);
router.patch("/:transactionId/return", returnBook);

export default router;
