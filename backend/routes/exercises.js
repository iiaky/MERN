const router = require('express').Router();
let Exercise = require("../models/exercise.model")

//CRUD - create read update delete

router.route('/').get((req, res) => {
    //find everything that uses the exercise model
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("Error " + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json("Exercise added!"))
        .catch(err => res.status(400).json('Error: ' + err));
});

//:id is like a variable. the ID is automatically created by mongoDB.
//if you send a GET req to exercises/[:id], you will get all the information for just THAT one exercise
router.route('/:id').get((req, res) => {
    //req.params.id gets the id directly from the url
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error " + err));
});

//a delete request -- find exercise by ID in the URL and then deletes it
router.route('/:id').delete((req, res) => {
    //req.params.id gets the id directly from the url
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exercise deleted."))
        .catch(err => res.status(400).json("Error " + err));
});

//update is a POST request
router.route('/update/:id').post((req, res) => {
    //find the current exercise, and then update it
    //exercise is the exercise that was just gotten by the DB  
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json("Exercise updated!"))
                .catch(err => res.status(400).json("Error ") + err);
        })
        .catch(err => res.status(400).json("Error ") + err);
});

module.exports = router;