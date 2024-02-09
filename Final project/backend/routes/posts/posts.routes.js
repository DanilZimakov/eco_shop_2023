const router = require("express").Router();
const { Post } = require("../../db/models");


router.get("/", async (req,res) => {
    const posts = await Post.findAll();
    res.json(posts)
})



module.exports = router