const express = require("express");
const { projects } = require("./data.json");

const app = express();

app.set("view engine", "pug");
app.use('/static', express.static('public'));

app.get("/", (req, res) => {
  templateData = { projects };
  res.render("index", templateData);
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project/:id", (req, res, next) => {
  const { id } = req.params;
  const project = projects[id];

  if (!id) {
    if (projects[id]) {
      res.redirect(`/project/${id}`);
    } else {
      const err = new Error();
      err.status = 404;
      err.message = "Looks like the project you requested was not found";
      res.redirect(`/page-not-found/`);
      next(err);
    }
  }

  templateData = { project, id };

  res.render("project", templateData);
});

app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  err.message = "Page not found";
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.render("error");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
