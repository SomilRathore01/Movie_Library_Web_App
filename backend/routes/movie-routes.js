import express from "express";
import { addMovie, getAllmovies, getMovieById } from "../controllers/movie-controller.js";

const movieRouter = express.Router();

movieRouter.post("/", addMovie);
movieRouter.get("/:id", getMovieById);
movieRouter.get("/", getAllmovies);


export default movieRouter;