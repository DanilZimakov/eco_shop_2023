const router = require('express').Router()
const Users = require('../../components/Users')
const { User } = require('../../db/models')

module.exports = router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({ raw: true })
        console.log(users)
        res.send(res.renderComponent(Users, { title: 'Users page', users }))
    } catch ({ message }) {
        res.json(message)
    }
})