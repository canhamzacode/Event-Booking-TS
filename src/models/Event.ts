import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: String,
  description: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["scheduled", "cancelled", "completed"],
    default: "scheduled",
  },
});

export default mongoose.model("Event", EventSchema);
