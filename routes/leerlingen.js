const express = require("express");
const ctrLeerlingen = require("../controller/ctrlLeerling");

// maak een routing object aan
const routes = express.Router();

// maak mijn endpoints aan
routes.get("/", ctrLeerlingen.getAll);
routes.get("/getOne/:id", ctrLeerlingen.getOne);
routes.post("/getOneP", ctrLeerlingen.getOneP);

module.exports = routes;
