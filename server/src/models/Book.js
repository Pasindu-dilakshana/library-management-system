import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    totalCopies: {
      type: Number,
      required: true,
      min: 1,
      default: 1
    },
    availableCopies: {
      type: Number,
      required: true,
      min: 0,
      default: 1
    },
    coverImage: {
      type: String,
      trim: true
    },
    shelfLocation: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

bookSchema.index({ title: "text", author: "text", category: "text" });

export const Book = mongoose.model("Book", bookSchema);
