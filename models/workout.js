const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: [{
    name: {
        type: String,
        trim: true
      },
      type: {
        type: String
      },
      duration: {
        type: Number,
        required: "Enter duration"
      },
      weight: {
        type: Number,
        required: "Enter weight"
      },
      distance: {
        type: Number,
        required: "Enter distance"
      },
      sets: {
        type: Number,
        required: "Enter sets"
      },
      reps: {
        type: Number,
        required: "Enter reps"
      }
}],
date: {
type: Date,
default: Date.now
}
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;