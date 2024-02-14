const router = require("express").Router();
const { Post, Material, Compoud } = require("../../db/models");
router.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  const posts = await Post.findOne({where: {id: postId}});
  const compouds = await Compoud.findAll({ where: { post_id: postId } });
  const materials = await Material.findAll();

  const arrPosts = await JSON.parse(JSON.stringify(posts));
  const arrCompouds = await JSON.parse(JSON.stringify(compouds));
  const arrMaterials = await JSON.parse(JSON.stringify(materials));
  arrCompouds.forEach((el) => {
    el.material_id = arrMaterials.find((item) => item.id === el.material_id);
  });
  arrCompouds.forEach((el) => {
    el.post_id = arrPosts;
  });
  const resault = arrCompouds.map((el) => {
    const result =
      ((el.parcent / 100) *
        el.material_id.environmental_impact *
        el.post_id.weight) /
      100;

    return result;
  });
  
  function generateHarm() {
    let harmElemetn = 0;
    for (let i = 0; i < resault.length; i += 1) {
      harmElemetn += resault[i];
    }
    return Math.ceil(harmElemetn / resault.length);
  }
  const toValidate = generateHarm();
 

  function validateHarm(harm) {
    switch (true) {
      case harm >= 1 && harm <= 30:
        return "Материалы с низким уровнем вреда. Могут считаться экологически устойчивыми и безопасными для окружающей среды.";
      case harm >= 31 && harm <= 70:
        return "Материалы с умеренным уровнем вреда. Требуют внимания и могут потребовать улучшений в производственных процессах для снижения воздействия.";
      case harm >= 71 && harm <= 100:
        return "Материалы с высоким уровнем вреда. Могут быть экологически небезопасными и требуют серьезных усилий для снижения их влияния на окружающую среду.";
      default:
        return "Неизвестное значение";
    }
  }
  const harm = validateHarm(toValidate);

  res.json({postId, message: harm});
});

module.exports = router;
