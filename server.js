const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/routes")());

app.listen(PORT, () => {
  console.log(`App server running on PORT ${PORT}`);
});
