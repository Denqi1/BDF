import express from "express";
import { connect } from "mongoose";
import { router } from "./routes.js";

const app = express();
const PORT = 3000;
const URL = "mongodb://localhost:27017/main";

connect(URL);

app.use(express.json(), router);

app.listen(PORT, () => {
  console.log("server is running, port: " + PORT);
});

export { app };
