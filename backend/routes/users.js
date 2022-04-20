const router = require('express').Router(); //requiring an express router
let User = require('../models/user.model'); //require the mongoose model for the user

//the first route - handling http GET requests
router.route('/').get((req, res) => {
    //a mongoose method - gets a list of all the users from the mongoDB database
    //'find' method returns a promise, and results are returned in JSON format
    //after it finds all the users, THEN we get all the users and return it in JSON format (res.json()) - which are the users that we got from the DB
    //if there is an error, we return a status 400 with an error message ("Error 400")


    //from the "Users mongoose model", find..
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// the second route - handling http POST requests
router.route('/add').post((req, res) => {
    const username = req.body.username; //new username is part of the request body
    const newUser = new User({username}); //creating a new user out of the username -- a new instance of the user model that is saved to the DB
    //the DB will have multiple user instances, all using the same user model, so they all contain the same information

    //newUser will then be saved into the DB with the 'save()' method
    //the RESPONSE will be "user added"
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json("Error " + err));
});

module.exports = router; //exporting the router