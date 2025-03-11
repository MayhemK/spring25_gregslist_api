import { Schema } from "mongoose";

export const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, minLength: 0, maxLength: 30, required: true },
    bathrooms: { type: Number, minLength: 0, maxLength: 25, required: true },
    levels: { type: Number, minLength: 1, maxLength: 4, required: true },
    price: { type: Number, minLength: 0, maxLength: 100000000, required: true },
    imgUrl: { type: String, minLength: 0, maxLength: 500, required: true },
    description: { type: String, minLength: 0, maxLength: 500, required: false },
    year: { type: Number, minlength: 1000, maxLength: 2024, required: true },

  },
  { timestamps: true, toJSON: { virtuals: true } }
)