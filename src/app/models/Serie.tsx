const mongoose = require("mongoose");

const SerieSchema = mongoose.Schema(
  {
    name: String,
    image: String,
    imdb: Number,
    genre: Array,
    plot: String,
    year: String,
    finalYear: String
  },
);
const Series = mongoose.models.Series || mongoose.model("Series", SerieSchema);

export default Series;