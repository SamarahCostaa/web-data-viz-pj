var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar/:fk_endereco", function (req, res) {  //qual fk eu quero cadastrar
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/comentar/:fk_usuario", function (req, res) {
    usuarioController.comentar(req, res);
}); 

router.get("/exibir_post1", function (req, res) {
    usuarioController.exibir_post1(req, res);
}); 


module.exports = router;