import { Schema } from "mongoose";

export const PetSchema = new Schema(
  {
    name: { type: String, minLength: 1, maxLength: 50, required: true },
    imgUrl: { type: String, minLength: 0, maxLength: 500, required: true },
    age: { type: Number, minLength: 1, maxLength: 50, required: true },
    likes: { type: [String], minLength: 1, maxLength: 50, required: true },
    isVaccinated: { type: Boolean, required: true },
    status: { type: String, enum: ['available', 'pending', 'adopted'], default: 'available', required: true },
    species: { type: String, enum: ['cat, dog, bird, capybara'] },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true
  }
)