const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [ExerciseSchema]
},
  { toJSON: { virtuals: true } }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;