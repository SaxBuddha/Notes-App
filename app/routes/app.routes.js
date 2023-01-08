//Routing module for API endpoints.

module.exports = (app) => {
  const App = require("../controllers/app.controller.js");

  app.post("/create", App.create);

  app.get("/get-all", App.findAll);

  app.get("/note/:noteId", App.findOne);

  app.get("/search/:key", App.search);

  app.put("/note/:noteId", App.update);

  app.delete("/note/:noteId", App.delete);
};
