const express = require("express");
const router = express.Router();
const controller = require("../controllers/filmeController");

router.get("/filmes", controller.getFilmes);
router.post("/filmes", controller.createFilme);
router.put("/filmes/:id", controller.updateFilme);
router.delete("/filmes/:id", controller.deleteFilme);

module.exports = router;
