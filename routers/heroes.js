const express = require('express')

const controllerHero = require('../controllers/heroes')

const router = express.Router()

// Routes created: To see te list of heroes, find hero by its id, updated a hero and delete a hero by its id 
router.post('/create', controllerHero.create)
router.get('/', controllerHero.getHeroes)
router.get('/:id', controllerHero.getHeroesById)
router.patch('/update/:id', controllerHero.updateHero)
router.delete('/delete/:id', controllerHero.deleteHero)


// use export const royter like a module
module.exports = router