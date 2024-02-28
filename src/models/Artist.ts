import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: String,
      required: true,
    },
  ],
  bio: String,
});

export default mongoose.model("Artist", ArtistSchema);
