const router = require('express').Router()
const { User } = require('../../db/models')

// router.get('/', async (req, res) => {
//     try {
//         const users = await User.findAll({ where: {user_isAdmin: 'true'}})
//         res.json(users)
        
//     } catch ({ message }) {
//         res.json({ message: 'error' })
//     }
// })

router.put('/:userId', async (req, res) => {
    try {
        const user = await User.findOne({ where: { id: req.params.userId } })
        user.isAdmin = !user.isAdmin
        user.save()
        res.json({ message: 'success' })
        
    } catch ({ message }) {
        res.json({ message })
    }
})

module.exports = router