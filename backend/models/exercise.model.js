const mongoose = require('mongoose'); //importing mongoose
const Schema = mongoose.Schema; //making a mongoose schema

//like declaring an instance
const exerciseSchema = new Schema({
    //just going to be like dictonaries as volues
    username : {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true,
});

//making a schema with some name + the reference schema instance
const Exercise = mongoose.model('Exercise', exerciseSchema);

//exporting something idfk
module.exports = Exercise;