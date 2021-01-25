require("dotenv").config();
const express = require("express");

const app = express();
const dbURI =
  " mongodb+srv://haase1020:password1234@test.cm24m.mongodb.net/test?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//   .then((result) => app.listen(3000))
//   .catch((err) => console.log("houston, there is a problem", err));

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");

app.use("/subscribers", subscribersRouter);
("loca");

app.listen(3000, () => {
  console.log("server is running");
});
