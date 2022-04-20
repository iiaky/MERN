
//npm start - starts the server (on port 3000)
//nodemon server - starts the backend server (on port 5000)

//import all packages
const express = require('express'); // web framework for node 
const cors = require('cors'); //cross origin resource sharing, makes it easy to access something outside the serve from the server
const mongoose = require('mongoose'); //connects to mongodb database

require('dotenv').config() //dotenv stores environment variables in a .env file, allows for automatic reloading

//create the express server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); //cors middleware
app.use(express.json()); //allow us to parse json

const uri = process.env.ATLAS_URI; //mongodb uri (basically a url)
mongoose.connect(uri, { useNewUrlParser : true});
                        //connect mongoose to the database, add flags to deal with updates to mongo db
                        // newurlparser - tool to parse mongodb connection strings was rewritten, so they added a flag for the new one

                        const connection = mongoose.connection;
connection.once('open', () => { //once the connection is open
    console.log("MongoDB database connection established successfully");
});

//telling the server to use files in '/routes' -- need to fire require the files, then use the files
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter); //makes it so when someone goes to root url and put /exercises at the end, it will load everything in the exercise router
app.use('/users', usersRouter); //same for users


//starting the server - will listen on a specific port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});