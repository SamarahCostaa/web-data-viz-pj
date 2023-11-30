var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/trezeDezenove", function (req, res) {
    usuarioController.de13_a19(req, res);
});

router.get("/dashboard", function (req, res) {
    usuarioController.de0_a12(req, res);
});

router.get("/de20anosAte25", function (req, res) {
    usuarioController.de20_a25(req, res);
});

router.get("/vinteSeisTrinta", function (req, res) {
    usuarioController.de26_a30(req, res);
});

router.get("/maiorTrinta", function (req, res) {
    usuarioController.mais_que_30(req, res);
});



router.get("/feminino", function (req, res) {
    usuarioController.exibir_feminino(req, res);
});

router.get("/masculino", function (req, res) {
    usuarioController.exibir_masculino(req, res);
});

router.get("/outro", function (req, res) {
    usuarioController.exibir_outro(req, res);
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
router.get("/exibir_post3", function (req, res) {
    usuarioController.exibir_post3(req, res);
}); 
router.get("/exibir_post4", function (req, res) {
    usuarioController.exibir_post4(req, res);
}); 
router.get("/exibir_post5", function (req, res) {
    usuarioController.exibir_post5(req, res);
}); 
router.get("/exibir_post6", function (req, res) {
    usuarioController.exibir_post6(req, res);
}); 



module.exports = router;