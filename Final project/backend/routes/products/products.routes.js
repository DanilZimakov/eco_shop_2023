const router = require("express").Router();
const { Post } = require("../../db/models");

router.post("/add", async (req, res) => {
    try {
      const { name, image } = req.body.data;
    //   const animal = await Post.create({ name, image });
    //   res.json(animal);
    console.log(req.body);
    } catch (message) {
      res.json(message);
    }
  });
  
  router.delete("/:animalId", async (req, res) => {
    try {
      const { animalId } = req.params;
      const result = await Animal.destroy({
        where: { id: animalId },
      });
  
      if (result > 0) {
        res.json(animalId);
        return;
      }
      throw new Error();
    } catch ({ message }) {
      res.json({ message });
    }
  });
  
  router.put("/:animalId", async (req, res) => {
    try {
      const { animalId } = req.params;
      const { name, image, user_id, type_id } = req.body;
      const animal = await Animal.update(
        {
          name,
          image,
          user_id,
          type_id,
        },
        { where: { id: animalId, user_id: req.session.userId } },
      );
      res.json(animal);
    } catch (message) {
      res.json(message);
    }
  });
  

module.exports = router