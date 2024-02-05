const router = require('express').Router()
const { User } = require('../../db/models')
const { sessionChecker } = require('../../middleware/getUser')

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
        
    } catch ({ message }) {
        res.json({ message: 'error' })
    }
})

router.delete('/:userId', async (req, res) => {
    try {
        const result = await User.destroy({ where: { id: req.params.userId } })
        if (result) {
            res.json({ message: 'success' })
            return
        }
    } catch ({ message }) {
        res.json({ message: 'Error while deleting user' })
    }
})

// router.put('/admin/:userId', async (req, res) => {
//     try {
//         const user = await User.findOne({ where: { id: req.params.userId } })
//         console.log(user, '_______');
//         user.isAdmin = !user.isAdmin
//         user.save()
//         res.json({ message: 'success' })
        
//     } catch ({ message }) {
//         res.json({ message })
//     }
// })

router.put('/:userId', async (req, res) => {
    try {
        const user = await User.findOne({ where: { id: req.params.userId } })
        user.isBanned = !user.isBanned
        user.save()
        res.json({ message: 'success' })
        
    } catch ({ message }) {
        res.json({ message })
    }
})




module.exports = router