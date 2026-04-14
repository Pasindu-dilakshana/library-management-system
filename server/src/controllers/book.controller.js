import { StatusCodes } from "http-status-codes";
import { Book } from "../models/Book.js";
import { sendResponse } from "../utils/api-response.js";

export const createBook = async (request, response) => {
  const book = await Book.create(request.body);
  sendResponse(response, StatusCodes.CREATED, "Book created successfully", { book });
};

export const getBooks = async (request, response) => {
  const { search = "", category } = request.query;
  const query = {};

  if (search) {
    query.$text = { $search: search };
  }

  if (category) {
    query.category = category;
  }

  const books = await Book.find(query).sort({ createdAt: -1 });
  sendResponse(response, StatusCodes.OK, "Books fetched successfully", { books });
};

export const updateBook = async (request, response) => {
  const book = await Book.findByIdAndUpdate(request.params.bookId, request.body, {
    new: true,
    runValidators: true
  });

  sendResponse(response, StatusCodes.OK, "Book updated successfully", { book });
};

export const deleteBook = async (request, response) => {
  await Book.findByIdAndDelete(request.params.bookId);
  sendResponse(response, StatusCodes.OK, "Book deleted successfully");
};
