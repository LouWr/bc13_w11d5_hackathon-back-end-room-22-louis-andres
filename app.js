const express = require("express");

const app = express();
const PORT = process.env.PORT;

const cardRouter = require("./routes/cardRouter");

app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`server is listening on ${PORT}`);
});

app.use("/api/cards", cardRouter);
