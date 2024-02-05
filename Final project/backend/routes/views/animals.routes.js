const router = require('express').Router()
const Animals = require('../../components/Animals')
const AnimalPage = require('../../components/AnimalPage')
const { Animal, Like } = require('../../db/models')


router.get('/', async (req, res) => {
    try {
        const animals = await Animal.findAll({
            // raw: true,
            order: [['id', 'ASC']],
            // include: {
            //     model: Like,
            // }
        })
        console.log(animals);
        // const likes = await Like.findAll()
        // console.log('LIKES: ', likes);
        res.send(res.renderComponent(Animals, { title: 'Animals page', animals }))
    } catch ({ message }) {
        res.json(message)
    }
})

router.get('/:animalId', async (req, res) => {
    try {
        const { animalId } = req.params
        const animal = await Animal.findOne({ where: { id: animalId }})
        res.send(res.renderComponent(AnimalPage, { title: 'Animal page', animal }))
    } catch ({ message }) {
        res.json(message)
    }
})


module.exports = router