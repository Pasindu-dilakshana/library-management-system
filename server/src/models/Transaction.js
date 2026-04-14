import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true
    },
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    status: {
      type: String,
      enum: ["issued", "returned", "overdue"],
      default: "issued"
    },
    issuedAt: {
      type: Date,
      default: Date.now
    },
    dueDate: {
      type: Date,
      required: true
    },
    returnedAt: {
      type: Date
    },
    fineAmount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);
