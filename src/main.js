import express from "express";
import { connect } from "mongoose";
import { router } from "./routes.js";
import { cors } from "cors";

const app = express();
const PORT = 3000;
const URL = "mongodb://localhost:27017/main";
const allowedOrigins = ["http://example.com"];
const corsOptions = {
  origin: allowedOrigins,
};

connect(URL);

app.use(express.json(), router, cors(corsOptions));

app.listen(PORT, () => {
  console.log("server is running, port: " + PORT);
});

export { app, corsOptions };
