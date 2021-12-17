import mongoose, { Model, Schema } from "mongoose";

import User from "./UserDocument";

export const userSchema: Schema = new mongoose.Schema({
  username: String
});

const UserCollection: Model<User> = mongoose.model(
  "User",
  userSchema
);
export default UserCollection;
