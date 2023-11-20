var database = require("../database/config")

//LOGIN
// var idUser;
function autenticar(emailVar, senhaVar) {
    var instrucao = `
        SELECT id_usuario, url_imagem, nome, email, idade, genero, senha FROM usuario WHERE email = '${emailVar}' AND senha = '${senhaVar}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



// CADASTRO!
function cadastrar(imagemVar, nomeVar, emailVar, idadeVar, generoVar, senhaVar) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeVar, emailVar, senhaVar);

    var instrucao = `
        INSERT INTO usuario (url_imagem, nome, email, idade, genero, senha) VALUES ('${imagemVar}', '${nomeVar}', '${emailVar}', '${idadeVar}', '${generoVar}', '${senhaVar}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function comentar(comentario_post1, emailVar, senhaVar/*, idUser*/) {
    console.log("Executando a função comentar no Model...");

    // Faça as validações necessárias antes de executar o SQL
    if (comentario_post1 == undefined /* || idUser == null*/) {
        return Promise.reject("Campos inválidos!");
    }

    var pegando_id = `
        SELECT id_usuario FROM usuario WHERE email = '${emailVar}' AND senha = '${senhaVar}';
    `;

    var instrucao = `
        INSERT INTO comentario (descricao, fk_post, fk_usuario) VALUES ('${comentario_post1}', 1, '${pegando_id}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    // Retorna a promessa para o Controller lidar com o resultado ou erro
    return database.executar(instrucao);
    // return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    comentar
};