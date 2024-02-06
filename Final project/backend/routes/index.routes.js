const router = require('express').Router()
const authRouter = require("./auth/auth.routes") 


router.use("/api/auth", authRouter)


module.exports = router