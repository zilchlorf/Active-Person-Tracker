const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
});
router.get("/workouts/range", (req, res) => {
    console.log('we are in the get/range api route')
    db.Workout.find({}).limit(7)
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        })
});
//matches line 26 on api.js
router.post("/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbworkout => res.json(dbworkout))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});
//matches line 16 on api.js
router.put("/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(params.id,
        { $push: { exercises: body } }, { new: true })
        .then(dbworkout => {
            console.log("Here is what got put in put route", dbworkout)
            res.json(dbworkout)
        })
});

module.exports = router;