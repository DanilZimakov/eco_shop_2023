const router = require("express").Router();
const { Post, Material, Compound, HarmResult } = require("../../db/models");
router.post("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const posts = await Post.findOne({ where: { id: postId } });
    if(!posts){
      return res.status(400).json({message: "Такого поста не существует"})
    }
    const compouds = await Compound.findAll({ where: { post_id: postId } });
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
          return {
            message:
              "Отличный выбор! Эти материалы и изделия легко утилизировать, поощряя устойчивость.",
            ecoStatus:
              "Низкая вредность. Эти вещи легко перерабатываются и поддерживают экологию.",
          };
        case harm >= 31 && harm <= 50:
          return {
            message:
              "При возможности выбирайте вещи с более низкой экологической оценкой. Однако, если нет доступных альтернатив, это всё же лучше, чем более вредные варианты.",
            ecoStatus:
              "Средняя вредность. Есть лучшие альтернативы, но эти вещи могут быть приемлемыми.",
          };
        case harm >= 51 && harm <= 70:
          return {
            message:
              "Возможно, выбирать более устойчивые варианты, но если они недоступны, эти вещи могут служить приемлемым компромиссом в балансе между стилем и устойчивостью.",
            ecoStatus:
              "Умеренная вредность. Существуют более устойчивые альтернативы, но эти вещи могут быть приемлемыми.",
          };
        case harm >= 71 && harm <= 85:
          return {
            message:
              "Покупайте эти вещи повторно, чтобы снизить общий экологический след. Однако, лучше избегать активной поддержки в таких случаях.",
            ecoStatus:
              "Высокая вредность. Эти вещи сложно перерабатываются, поэтому лучше покупать их повторно.",
          };
        case harm >= 86 && harm <= 100:
          return {
            message:
              "Сложно перерабатываемые материалы требуют повторного использования. Приобретайте такие вещи повторно, но старайтесь избегать активной поддержки и выбирать более устойчивые альтернативы, если это возможно.",
            ecoStatus:
              "Критически высокая вредность. Эти вещи сложно перерабатываются, но их повторное использование важно.",
          };
        default:
          return "Неизвестное значение";
      }
    }
    const eco = validateHarm(toValidate);
   
    

    function colorHarm(harm) {
      let color = "";
      if (harm >= 1 && harm <= 30){
        color = "green";
      } else if (harm >= 31 && harm <= 70) {
        color = "yellow";
      } else if (harm >= 71 && harm <= 100) {
        color = "purple";
      }
      return color;
    }
    const color = colorHarm(toValidate);
    
    

    const harmSearch = await HarmResult.findOne({
      where: {
        post_id: postId,
      }
    })

    if(harmSearch){
      res.status(400).json({message: "Данные уже были добавлены"})
      return
    }
    const harm = await HarmResult.create({
      post_id: postId,
      message: eco.message,
      color,
      ecoStatus: eco.ecoStatus,
    });
    res.json(harm);
  } catch (error) {
    console.error("Error SERVER :", error);
    res.status(500).json({message: "Ошибка добваления"})
  }
});


router.get("/", async (req, res) => {
  try {
    const harm = await HarmResult.findAll();
    res.json(harm);
  } catch (error) {
    console.error("Error SERVER :", error);
    res.status(500).json({message: "Ошибка загрузки данных"})
  }
})

module.exports = router;


