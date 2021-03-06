const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const { PORT, MONGODB_URI } = require("./config");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB CONNECTION ESTABLISHED");
    app.listen(PORT, () => {
      console.log(`App server running on PORT ${PORT}`);
      app.use(require("./routes/routes")());
    });
  })
  .catch((err) => {
    console.log(err);
    app.listen(PORT, () => {
      app.use((req, res) => {
        res.render("errors/databasedown");
      });
    });
  });
