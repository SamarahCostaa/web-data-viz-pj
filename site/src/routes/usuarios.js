var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.get("/dashboard", function (req, res) {
    console.log('na função')
    usuarioController.de0_a12(req, res);
});


//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {  //qual fk eu quero cadastrar
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/comentar_1/:fk_usuario", function (req, res) {
    usuarioController.comentar_1(req, res);
}); 

router.post("/comentar_2/:fk_usuario", function (req, res) {
    usuarioController.comentar_2(req, res);
}); 

router.post("/comentar_3/:fk_usuario", function (req, res) {
    usuarioController.comentar_3(req, res);
}); 

router.post("/comentar_4/:fk_usuario", function (req, res) {
    usuarioController.comentar_4(req, res);
});

router.post("/comentar_5/:fk_usuario", function (req, res) {
    usuarioController.comentar_5(req, res);
});

router.post("/comentar_6/:fk_usuario", function (req, res) {
    usuarioController.comentar_6(req, res);
}); 

router.get("/exibir_post1", function (req, res) {
    usuarioController.exibir_post1(req, res);
}); 

router.get("/exibir_post2", function (req, res) {
    usuarioController.exibir_post2(req, res);
}); 



module.exports = router;