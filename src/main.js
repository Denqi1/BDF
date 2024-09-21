import express from "express";
import { connect } from "mongoose";
import { router } from "./routes.js";

const app = express();
const port = 3000;
const url = "mongodb://localhost:27017/main";

connect(url);

app.use(express.json(), router);

app.listen(port, () => {
  console.log("server is running, port: " + port);
});

export { app };
