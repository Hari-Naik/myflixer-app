import mongoose from "mongoose";

const FavouriteSchema = new mongoose.Schema(
  {
    uid: String,
    media_id: String,
    poster_path: String,
    title: String,
    overview: String,
    release_date: String,
    vote_average: Number,
    type: String,
  },
  { timestamps: true }
);

const Favourite =
  mongoose.models.Favourite || mongoose.model("Favourite", FavouriteSchema);

export default Favourite;
