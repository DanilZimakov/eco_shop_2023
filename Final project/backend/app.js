require("@babel/register");


const express = require("express");
const serverConfig = require("./config/serverConfig")

const app = express();
const PORT = 3000;

const indexRouter = require("./routes/index.routes");
serverConfig(app);

app.use("/", indexRouter)

app.listen(PORT, () => {
  console.log("This server is dying on port: ", PORT);
});
