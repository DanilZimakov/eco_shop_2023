

const express = require("express");
const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.routes");

const app = express();
const PORT = 3000;

serverConfig(app);

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("This server is dying on port: ", PORT);
});
