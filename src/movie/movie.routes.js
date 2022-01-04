const { Router } = require("express");
const movieRouter = Router();
const { addMovie } = require("./movie.controllers");

movieRouter.post("/movie", addMovie);

module.exports = movieRouter;
