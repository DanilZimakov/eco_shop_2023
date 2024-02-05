const router = require('express').Router()
// const MainPage = require('../../components/MainPage')

router.get('/', (req, res) => {
    res.send('hello')

    // const document = res.renderComponent(MainPage, { title: 'Main page' })
    // res.send(document)

})

module.exports = router