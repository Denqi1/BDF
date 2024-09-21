import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
  title: String,
  category: String,
  year: Number,
  duration: Number,
  director: String,
});
const CategorySchema = new Schema({
  title: String,
});

const Category = model("Categories", CategorySchema);
const Movie = model("Movie", MovieSchema);

export { Movie, Category };
