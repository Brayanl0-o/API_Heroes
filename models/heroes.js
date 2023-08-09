const mongoose = require('mongoose')

//Created a const to store the mongoose module (allows create a model Schema)
const Schema = mongoose.Schema

//Define a variable to store the new Schema
const HeroSchema = new Schema({
    _id: Number, // Establecer el _id como Number
    name_hero: {
        type: String,
        required: true,
        maxLength: 100
    }
}, { _id: false }); // Deshabilitar la creación automática de _id por Mongoose

// Configurar la secuencia
HeroSchema.pre('save', async function (next) {
    if (!this.isNew) return next();

    const doc = this;
    const count = await mongoose.model('heroes').countDocuments(); // Contar documentos existentes
    doc._id = count + 1; // Incrementar el ID
    next();
});

// Create a new const to hold the model with the new Schema
// and defined heores for create a new collection in the database
const hero = mongoose.model('heroes', HeroSchema)
module.exports = hero