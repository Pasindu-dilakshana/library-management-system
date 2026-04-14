import { StatusCodes } from "http-status-codes";
import { Book } from "../models/Book.js";
import { Transaction } from "../models/Transaction.js";
import { AppError } from "../utils/app-error.js";
import { sendResponse } from "../utils/api-response.js";

export const issueBook = async (request, response) => {
  const { bookId, memberId, dueDate } = request.body;

  const book = await Book.findById(bookId);
  if (!book || book.availableCopies < 1) {
    throw new AppError("Book is not available for issuing", StatusCodes.BAD_REQUEST);
  }

  const transaction = await Transaction.create({
    book: bookId,
    member: memberId,
    issuedBy: request.user.userId,
    dueDate
  });

  book.availableCopies -= 1;
  await book.save();

  sendResponse(response, StatusCodes.CREATED, "Book issued successfully", {
    transaction
  });
};

export const returnBook = async (request, response) => {
  const transaction = await Transaction.findById(request.params.transactionId).populate("book");

  if (!transaction) {
    throw new AppError("Transaction not found", StatusCodes.NOT_FOUND);
  }

  transaction.status = "returned";
  transaction.returnedAt = new Date();
  await transaction.save();

  const book = await Book.findById(transaction.book._id);
  book.availableCopies += 1;
  await book.save();

  sendResponse(response, StatusCodes.OK, "Book returned successfully", {
    transaction
  });
};

export const getTransactions = async (_request, response) => {
  const transactions = await Transaction.find()
    .populate("book", "title author")
    .populate("member", "name email")
    .sort({ createdAt: -1 });

  sendResponse(response, StatusCodes.OK, "Transactions fetched successfully", {
    transactions
  });
};
