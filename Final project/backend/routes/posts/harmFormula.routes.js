// const router = require("express").Router();
// const { Post, Material, Compoud } = require("../../db/models");
// router.get("/:postId", async (req, res) => {
//   const { postId } = req.params;
//   const posts = await Post.findOne({where: {id: postId}});
//   const compouds = await Compoud.findAll({ where: { post_id: postId } });
//   const materials = await Material.findAll();

//   const arrPosts = await JSON.parse(JSON.stringify(posts));
//   const arrCompouds = await JSON.parse(JSON.stringify(compouds));
//   const arrMaterials = await JSON.parse(JSON.stringify(materials));
//   arrCompouds.forEach((el) => {
//     el.material_id = arrMaterials.find((item) => item.id === el.material_id);
//   });
//   arrCompouds.forEach((el) => {
//     el.post_id = arrPosts;
//   });
//   const resault = arrCompouds.map((el) => {
//     const result =
//       ((el.parcent / 100) *
//         el.material_id.environmental_impact *
//         el.post_id.weight) /
//       100;

//     return result;
//   });

//   function generateHarm() {
//     let harmElemetn = 0;
//     for (let i = 0; i < resault.length; i += 1) {
//       harmElemetn += resault[i];
//     }
//     return Math.ceil(harmElemetn / resault.length);
//   }
//   const toValidate = generateHarm();

//   function validateHarm(harm) {
//     switch (true) {
//       case harm >= 1 && harm <= 30:
//         return "Материалы с низким уровнем вреда. Могут считаться экологически устойчивыми и безопасными для окружающей среды.";
//       case harm >= 31 && harm <= 70:
//         return "Материалы с умеренным уровнем вреда. Требуют внимания и могут потребовать улучшений в производственных процессах для снижения воздействия.";
//       case harm >= 71 && harm <= 100:
//         return "Материалы с высоким уровнем вреда. Могут быть экологически небезопасными и требуют серьезных усилий для снижения их влияния на окружающую среду.";
//       default:
//         return "Неизвестное значение";
//     }
//   }
//   const harm = validateHarm(toValidate);

//   res.json({postId, message: harm});
// });

// module.exports = router;


// все тоже самое gpt подсказал что лучше так оптимизировать 

const router = require("express").Router();
const { Post, Material, Compound } = require("../../db/models");

router.get("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const compounds = await Compound.findAll({
      where: { post_id: postId },
      include: [
        {
          model: Material,
          as: "material", // Убедитесь, что в модели Compound есть ассоциация с Material с этим псевдонимом
        },
      ],
    });

    const harmScores = compounds.map(({ percent, material }) => {
      return (
        ((percent / 100) * material.environmental_impact * post.weight) / 100
      );
    });

    const averageHarm = harmScores.length
      ? Math.ceil(
          harmScores.reduce((acc, curr) => acc + curr, 0) / harmScores.length,
        )
      : 0;

    const harmMessage = validateHarm(averageHarm);

    res.json({ postId, message: harmMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

function validateHarm(harm) {
  if (harm >= 1 && harm <= 30) {
    return "Материалы с низким уровнем вреда. Могут считаться экологически устойчивыми и безопасными для окружающей среды.";
  } else if (harm >= 31 && harm <= 70) {
    return "Материалы с умеренным уровнем вреда. Требуют внимания и могут потребовать улучшений в производственных процессах для снижения воздействия.";
  } else if (harm >= 71) {
    return "Материалы с высоким уровнем вреда. Могут быть экологически небезопасными и требуют серьезных усилий для снижения их влияния на окружающую среду.";
  } else {
    return "Неизвестное значение";
  }
}

module.exports = router;
