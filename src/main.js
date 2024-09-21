import express from "express";
import { connect } from "mongoose";
import { router } from "./routes.js";

const APP = express();
const PORT = 3000;
const URL = "mongodb://localhost:27017/main";

connect(URL);

APP.use(express.json(), router);

APP.listen(PORT, () => {
  console.log("server is running, port: " + PORT);
});

export { APP };
