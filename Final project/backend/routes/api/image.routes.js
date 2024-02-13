// const express = require("express");
// const multer = require("multer");
// const { Image } = require("../../db/models");

// const router = express.Router();
// const upload = multer({ dest: "uploads/" });

// router.post("/user-profile", upload.single("image"), async (req, res) => {
//   const { file } = req;
//   if (!file) {
//     return res.status(400).send("Файл не был загружен.");
//   }

//   try {
//     // Сохранение информации о файле в базу данных
//     const image = await Image.create({
//       filename: file.filename,
//       filepath: file.path,
//       mimetype: file.mimetype,
//     });

//     res.status(201).send({ message: "Файл успешно загружен", image });
//   } catch (error) {
//     console.error("Ошибка при сохранении в базу данных:", error);
//     res.status(500).send("Ошибка сервера");
//   }
// });

// module.exports = router;
