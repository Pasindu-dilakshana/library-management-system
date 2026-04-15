import { StatusCodes } from "http-status-codes";
import { Transaction } from "../models/Transaction.js";
import { User } from "../models/User.js";
import { sendResponse } from "../utils/api-response.js";

export const getMembers = async (_request, response) => {
  const members = await User.find().sort({ createdAt: -1 });
  sendResponse(response, StatusCodes.OK, "Members fetched successfully", {
    members
  });
};

export const getMemberProfile = async (request, response) => {
  const member = await User.findById(request.params.memberId);
  const borrowedBooks = await Transaction.find({
    member: request.params.memberId,
    status: { $in: ["issued", "overdue"] }
  }).populate("book");

  sendResponse(response, StatusCodes.OK, "Member profile fetched successfully", {
    member,
    borrowedBooks
  });
};
