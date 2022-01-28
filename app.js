const express = require("express");
const { projects } = require("./data.json");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  templateData = { projects };
  res.render("index", templateData);
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project/:id", (req, res) => {
  const { id } = req.params;
  const project = projects[id];

  if (!id || !projects[id]) {
    res.render("page-not-found");
  } else {
    templateData = { project };
    res.render("project", templateData);
  }
});

app.use((req, res) => {
  const err = new Error();
  err.status = 404;
  err.message = "Page not found";
  res.render("page-not-found");
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  if (!err.status) err.status = 500;
  if (!err.message) err.message = "Internal Server Error";
  res.render("error");
});

app.listen(process.env.PORT || port, () => {
  console.log(`The application is running on localhost:${port}`);
});
