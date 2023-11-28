var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    /*RECEBENDO OS DADOS DO SERVIDOR*/
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    /*VALIDANDO*/

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        /*ACESSANDO O MODEL*/
        usuarioModel.autenticar(email, senha)
        .then(
             function (resposta) {
                 if (resposta.length == 0) {
                 res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                 res.status(200).json(resposta);
                }      
            }
        ).catch(
             function (erro) {
                 console.log(erro);
                 console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                 res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    /*RECEBENDO OS DADOS DO SERVIDOR*/
    var usuario_receber = require("../routes/usuarios");
    var imagemVar = req.body.imagemServer;
    var nomeVar = req.body.nomeServer;
    var emailVar = req.body.emailServer;
    var idadeVar = req.body.idadeServer;
    var generoVar = req.body.generoServer;
    var senhaVar = req.body.senhaServer;


    // VALIDAÇÕES
    if (imagemVar == undefined){
        res.status(400).send("Sua imagem está undefined!");
    } else if (nomeVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (idadeVar == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (generoVar == undefined) {    
        res.status(400).send("Seu genero está undefined!");
    } else if (senhaVar == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }

    else {
     /*ACESSANDO O MODEL*/
     usuarioModel.cadastrar(imagemVar, nomeVar, emailVar, idadeVar, generoVar, senhaVar) // isso
        .then(
         function (resultado) {
         res.json(resultado);
        })
        .catch(
         function (erro) {
         console.log(erro);
         console.log(
         "\nHouve um erro ao realizar o cadastro! Erro: ",
         erro.sqlMessage
         );
         res.status(500).json(erro.sqlMessage);
         });
    }
}

function comentar_1(req, res) {
    var usuario_receber = require("../routes/usuarios");
    var comentario_post1 = req.body.comentario_post1Server;
    // var comentario_post2 = req.body.comentario_post2Server;
    var fk_usuario = req.params.fk_usuario;
    var fk_post = req.body.fk_postServer;


    // Faça as validações dos valores
    if (comentario_post1 == undefined){
        res.status(400).send("Seu comentario está undefined!");
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (fk_post == undefined) {
        res.status(400).send("Seu id está undefined!");
    } 
    else {
    
        usuarioModel.comentar_1(fk_usuario, fk_post, comentario_post1)
          .then(
              function (resultado) {
                  res.json(resultado);
       
              }
          )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function comentar_2(req, res) {
    var usuario_receber = require("../routes/usuarios");
    // var comentario_post1 = req.body.comentario_post1Server;
    var comentario_post2 = req.body.comentario_post2Server;
    var fk_usuario = req.params.fk_usuario;
    var fk_post = req.body.fk_postServer;


    // Faça as validações dos valores
    if (comentario_post2 == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    // }
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (fk_post == undefined) {
        res.status(400).send("Seu id está undefined!");
    } 
    else {
    
        usuarioModel.comentar_2(fk_usuario, fk_post, comentario_post2)
          .then(
              function (resultado) {
                  res.json(resultado);
       
              }
          )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function comentar_3(req, res) {
    var usuario_receber = require("../routes/usuarios");
    // var comentario_post1 = req.body.comentario_post1Server;
    var comentario_post3 = req.body.comentario_post3Server;
    var fk_usuario = req.params.fk_usuario;
    var fk_post = req.body.fk_postServer;


    // Faça as validações dos valores
    if (comentario_post3 == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    // }
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (fk_post == undefined) {
        res.status(400).send("Seu id está undefined!");
    } 
    else {
    
        usuarioModel.comentar_3(fk_usuario, fk_post, comentario_post3)
          .then(
              function (resultado) {
                  res.json(resultado);
       
              }
          )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function comentar_4(req, res) {
    var usuario_receber = require("../routes/usuarios");
    // var comentario_post1 = req.body.comentario_post1Server;
    var comentario_post4 = req.body.comentario_post4Server;
    var fk_usuario = req.params.fk_usuario;
    var fk_post = req.body.fk_postServer;


    // Faça as validações dos valores
    if (comentario_post4 == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    // }
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (fk_post == undefined) {
        res.status(400).send("Seu id está undefined!");
    } 
    else {
    
        usuarioModel.comentar_4(fk_usuario, fk_post, comentario_post4)
          .then(
              function (resultado) {
                  res.json(resultado);
       
              }
          )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function comentar_5(req, res) {
    var usuario_receber = require("../routes/usuarios");
    // var comentario_post1 = req.body.comentario_post1Server;
    var comentario_post5 = req.body.comentario_post5Server;
    var fk_usuario = req.params.fk_usuario;
    var fk_post = req.body.fk_postServer;


    // Faça as validações dos valores
    if (comentario_post5 == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    // }
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (fk_post == undefined) {
        res.status(400).send("Seu id está undefined!");
    } 
    else {
    
        usuarioModel.comentar_5(fk_usuario, fk_post, comentario_post5)
          .then(
              function (resultado) {
                  res.json(resultado);
       
              }
          )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function comentar_6(req, res) {
    var usuario_receber = require("../routes/usuarios");
    // var comentario_post1 = req.body.comentario_post1Server;
    var comentario_post6 = req.body.comentario_post6Server;
    var fk_usuario = req.params.fk_usuario;
    var fk_post = req.body.fk_postServer;


    // Faça as validações dos valores
    if (comentario_post6 == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    // }
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (fk_post == undefined) {
        res.status(400).send("Seu id está undefined!");
    } 
    else {
    
        usuarioModel.comentar_6(fk_usuario, fk_post, comentario_post6)
          .then(
              function (resultado) {
                  res.json(resultado);
       
              }
          )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}



function exibir_post1(req, res){
    usuarioModel.exibir_post1().then((resultado) => {
        res.status(200).json(resultado);
      });
}

function exibir_post2(req, res){
    usuarioModel.exibir_post2().then((resultado) => {
        res.status(200).json(resultado);
      });
}

function de0_a12(req, res){
    usuarioModel.de0_a12(idade0_12).then((resultado) => {
        res.status(200).json(resultado);
      });
}

module.exports = {
    autenticar,
    cadastrar,
    comentar_1, 
    comentar_2, 
    comentar_3, 
    comentar_4, 
    comentar_5, 
    comentar_6, 
    exibir_post1,
    exibir_post2,
    de0_a12
}