const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/", require("./routes/htmlRoutes"));
app.use("/api", require("./routes/apiRoutes"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


//comments below are an example of db interaction if I had 3 models, from example "populate"

// db.Workout.create({ name: "Campus workout" })
//   .then(dbworkout => {
//     console.log(dbworkout);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// app.post("/submit", ({ body }, res) => {
//   db.Workout.create(body)
//     .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// // app.get("/books", (req, res) => {
// //   db.Book.find({})
// //     .then(dbBook => {
// //       res.json(dbBook);
// //     })
// //     .catch(err => {
// //       res.json(err);
// //     });
// // });

// app.get("/exercise", (req, res) => {
//   db.Workout.find({})
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/exercises", (req, res) => {
//   db.Workout.find({})
//     .populate("exercises")
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


