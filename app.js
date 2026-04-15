const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const siteRouter = require("./routes/routes");
app.use("/", siteRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});