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

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).send({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.updateOne(
      { title: req.body.title },
      { $set: { actor: req.body.actor } },
      { new: true }
    );
    res.status(200).send({ message: "Success", updatedMovie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.deleteOne({ title: req.params.title });
    res.status(200).send({ message: "Success", deletedMovie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};
