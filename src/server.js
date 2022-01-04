require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const movieRouter = require("./movie/movie.routes");

app.use(express.json());
app.use(movieRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
