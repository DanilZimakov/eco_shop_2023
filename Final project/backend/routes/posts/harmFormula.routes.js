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
          as: "material",
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
