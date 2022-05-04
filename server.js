const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(require("./routes/routes")());

app.listen(PORT, () => {
  console.log(`App server running on PORT ${PORT}`);
});
