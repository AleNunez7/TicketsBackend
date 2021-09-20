const express = require("express");
const app = express();
const routes = require("./routes");
const port = 8002;
const cors = require("cors");
app.use(cors());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
