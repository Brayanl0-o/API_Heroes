const mongoose = require('mongoose')

//Created a const to store the mongoose module (allows create a model Schema)
const Schema = mongoose.Schema

//Define a variable to store the new Schema
const HeroSchema = new Schema({
    // Define the structure of the required fields 
    id: {
        type: Number,
        required: true,
    },
    name_hero: {
        type: String,
        required: true,
        maxLength: 100
    }
})

// Create a new const to hold the model with the new Schema
// and defined heores for create a new collection in the database
const hero = mongoose.model('heroes', HeroSchema)
module.exports = hero