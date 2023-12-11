const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    name: String,
    image: String,
    imdb: Number,
    genre: Array,
    plot: String,
    time: Number,
    year: String
  },
);
const Movies = mongoose.models.Movies || mongoose.model("Movies", MovieSchema);

export default Movies;