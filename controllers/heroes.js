const { default: mongoose } = require('mongoose')

//Use the models forlder and the heroes file to import the Hero models
const Hero = require('../models/heroes')

//Function defined to store the asynchronous tasks CRUD functions
const controllerHero = {
    create: async (req, res) => {
        try {
            const name_hero = req.body.name_hero

            //Wait to receive the created task with the promise
            await Hero.create({
                name_hero: name_hero
            });
            console.log('Hero Created')
            res.json({ msg: 'register' })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getHeroes: async (req, res) => {
        try {
            const heroes = await Hero.find({})
            res.json(heroes)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getHeroesById: async (req, res) => {
        try {
            const { id } = req.params
            const hero = await Hero.findById(id)
            res.json(hero)
        } catch (error) {
            return res.status(500).json({ msg: error.message })

        }
    },
    updateHero: async (req, res) => {
        try {
            const { id } = req.params
            const newHeroData = req.body

            await Hero.findByIdAndUpdate(id, newHeroData);

            //Return a success message or an error message
            res.json({ msg: 'update' })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    deleteHero: async (req, res) => {
        try {
            const { id } = req.params
            await Hero.findByIdAndDelete(id)
            res.json({ msg: "Hero deleted" })
        } catch (error) {
            console.error('Error al crear el heroe:', error);
            return res.status(500).json({ msg: error.message })
        }
    }
}
//Exports the function mostly controllerHero
module.exports = controllerHero