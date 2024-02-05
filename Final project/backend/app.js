require("@babel/register");

const cors = require("cors");
const express = require("express");
const config = require("./config/serverConfig");

const app = express();
const PORT = 3000;

const indexRouter = require("./routes/index.routes");

config(app);

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("This server is dying on port: ", PORT);
});
