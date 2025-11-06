const alleLeerlingen = require("../data/database");

const getAll = (req, res) => {
  res.json({ gelukt: "ok", data: alleLeerlingen });
};

const getOne = (req, res) => {
  const idLLN = req.params.id;
  // geef de leerling terug met ID 4 (JSON Formaat)
  res.json(alleLeerlingen.filter((leerling) => leerling.id == idLLN));
};

const getOneP = (req, res) => {
  // req.query --> queryString
  // req.params --> routes methode
  // req.body --> post methode
  const idLLN = req.body.id;
  res.json(alleLeerlingen.filter((leerling) => leerling.id == idLLN));
};

module.exports = {
  getAll,
  getOne,
  getOneP,
};
