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
router.post("/workouts", (req, res) => {
    res.json(req.originalUrl);
});
router.put("/workouts/:id", (req, res) => {
    res.json(req.originalUrl);
});
router.put("/workouts/range", (req, res) => {
    res.json(req.originalUrl);
});

module.exports = router;