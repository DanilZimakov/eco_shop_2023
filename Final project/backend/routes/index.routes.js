const router = require('express').Router()

const mainRoute = require('./views/main.routes')
const itemsApiRoute = require('./api/items.routes')
const authApiRoute = require('./api/auth.routes')
const usersApiRoute = require('./api/users.routes')
const adminsApiRoute = require('./api/admins.routes')
const mailApiRoute = require('./api/sendMessage.routes')

router.use('/', mainRoute)

router.use('/api/items', itemsApiRoute)
router.use('/api/auth', authApiRoute)
router.use('/api/users', usersApiRoute)
router.use('/api/admins', adminsApiRoute)
router.use('/api/sendMessage', mailApiRoute)

module.exports = router