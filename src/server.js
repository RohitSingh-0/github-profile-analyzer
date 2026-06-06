import express from "express";
import pool from "./config/db.js";
import route from "./routes/route.js";

const app = express();

app.use("/api", route);

app.listen(3000, () => {
  console.log("server started");
});