import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { CarSchema } from '../models/Car.js';
import { PetSchema } from '../models/Pets.js';
import { HouseSchema } from '../models/Houses.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('Car', CarSchema)
  Pets = mongoose.model('Pet', PetSchema)
  Houses = mongoose.model('House', HouseSchema)
}

export const dbContext = new DbContext()
