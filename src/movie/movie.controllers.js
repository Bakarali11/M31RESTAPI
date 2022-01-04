const Movie = require("./movie.model");

exports.addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).send({ message: "Success", movie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};
