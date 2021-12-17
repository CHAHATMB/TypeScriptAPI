import mongoose, { Model, Schema } from "mongoose";

import MeetingDocument from "./MeetingDocument";

export const meetingSchema: Schema = new mongoose.Schema({
  uid1: String,
  username1: String,
  uid2: String,
  username2: String,
  date: Date
});

const MeetingCollection: Model<MeetingDocument> = mongoose.model(
  "Meeting",
  meetingSchema
);
export default MeetingCollection;
