// install express as a module ==> npm i express
const express = require("express");
const routes_lln = require("./routes/leerlingen");
const routes_admin = require("./routes/admin");

// maak een lege app aan, vervolgens gaan we hem invullen
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  // controle op id == een nummer?

  next();
});

// in django -> urls.py ==> routes ==> bouw een endpoint
// HTTP kent een 4 tal soorten van routes
// GET - POST - UPDATE[PUT] - DELETE

// oude manier van routing
// app.get("/", (req, res) => {
//   res.send("Hallo");
// });

// app.get("/leerling", (req, res) => {
//   res.send("hallo vanuit leerlingen");
// });

// nieuwe manier van routing
app.use("/leerling", routes_lln);

app.get("/", (req, res) => {
  res.send("Welkom op mijn <b>pagina</b>");
});

app.listen(3000, () => console.log("server is running on port 3000"));
