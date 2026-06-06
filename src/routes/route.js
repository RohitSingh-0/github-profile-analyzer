import express from "express";
import { analyze, getAll, getOne } from "../controller/profile.controller.js";

const route = express.Router();

route.post("/profiles/:username", analyze);
route.get("/profiles", getAll);
route.get("/profiles/:username", getOne);

export default route;