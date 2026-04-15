import { StatusCodes } from "http-status-codes";
import { Book } from "../models/Book.js";
import { Transaction } from "../models/Transaction.js";
import { User } from "../models/User.js";
import { sendResponse } from "../utils/api-response.js";

export const getDashboardSummary = async (_request, response) => {
  const [totalBooks, totalMembers, borrowedBooks, recentTransactions] =
    await Promise.all([
      Book.countDocuments(),
      User.countDocuments(),
      Transaction.countDocuments({ status: { $in: ["issued", "overdue"] } }),
      Transaction.find()
        .populate("book", "title")
        .populate("member", "name")
        .sort({ createdAt: -1 })
        .limit(5)
    ]);

  sendResponse(response, StatusCodes.OK, "Dashboard summary fetched successfully", {
    stats: {
      totalBooks,
      totalMembers,
      borrowedBooks
    },
    recentTransactions
  });
};
