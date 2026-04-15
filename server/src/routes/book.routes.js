import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook
} from "../controllers/book.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 * /api/books/{bookId}:
 *   put:
 *     summary: Update a book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 */
router.use(authenticate);
router.get("/", getBooks);
router.post("/", createBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

export default router;
