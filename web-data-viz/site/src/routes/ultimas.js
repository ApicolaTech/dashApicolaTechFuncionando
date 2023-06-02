var express = require("express");
var router = express.Router();

var ultimasController = require("../controllers/medidaController");

router.get("/", function (req, res) {
    ultimasController.testar(req, res);
});

module.exports = router;