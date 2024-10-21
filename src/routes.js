import { Router } from "express";
import { Category, Movie } from "./schema.js";

const router = Router();

router.post("/movies", async (req, res) => {
  try {
    await Movie.create(req.body);

    return res.status(200).send("movie created");
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/categories", async (req, res) => {
  try {
    await Category.create(req.body);

    return res.status(200).send("categories created");
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/movies/:movieId", async (req, res) => {
  try {
    await Movie.deleteOne(req.query);

    return res.send("Complete delete movie request");
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/movies/:movieId", async (req, res) => {
  try {
    await Movie.updateOne(req.body);

    return res.status(200).send("movie created");
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export { router };
