var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

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
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var usuario_receber = require("../routes/usuarios");
    var imagemVar = req.body.imagemServer;
    var nomeVar = req.body.nomeServer;
    var emailVar = req.body.emailServer;
    var idadeVar = req.body.idadeServer;
    var generoVar = req.body.generoServer;
    var senhaVar = req.body.senhaServer;
    var cidadeVar = req.body.estadoServer;
    var estadoVar = req.body.cidadeServer;

    // Faça as validações dos valores
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
    } else if (cidadeVar == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (estadoVar == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } 
         else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(imagemVar, nomeVar, emailVar, idadeVar, generoVar, senhaVar, cidadeVar, estadoVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
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

function comentar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var usuario_receber = require("../routes/usuarios");
    var comentario_post1 = req.body.comentario_post1Server;
    var comentario_post2 = req.body.comentario_post2Server;
    // var idUser = req.body.idUserServer;
    // var idUser = sessionStorage.ID_USUARIO;
// var idUser = sessionStorage.ID_USUARIO;


    // Faça as validações dos valores
    if (comentario_post1 == undefined){
        res.status(400).send("Seu comentario está undefined!");
    } else if (comentario_post2 == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    } 
    else {
        // if (res.status == 200) {
      
        //     res.json().then(json => {

        //         // console.log(json[0].nome); //está pegando o nome do primeiro item do vetor
        //         console.log(JSON.stringify(json));
        //         sessionStorage.ID_USUARIO = json[0].id_usuario;
        //         // apenas para exibir o loading
        //     });
      
        // }


        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.comentar(comentario_post1, comentario_post2/*, idUser*/)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
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

// function comentar(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

//     var usuario_receber = require("../routes/usuarios");
//     var comentario_post1 = req.body.comentario_post1Server;
//     var comentario_post2 = req.body.comentario_post2Server;
//     // Faça as validações dos valores
//     if (comentario_post1 == undefined){
//         res.status(400).send("Seu comentario está undefined!");
//     } else if (comentario_post2 == undefined) {
//         res.status(400).send("Seu comentario está undefined!");
//     } 
    
//     else {

//         // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
//         usuarioModel.cadastrar(comentario_post1, comentario_post2)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

module.exports = {
    autenticar,
    cadastrar,
    comentar
}