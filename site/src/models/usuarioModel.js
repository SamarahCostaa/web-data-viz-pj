var database = require("../database/config")


//LOGIN!
function autenticar(emailVar, senhaVar) {
    /*COMANDO NO BANCO DE DADOS*/
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

//COMENTAR!
// var instrucao2 = '';
function comentar_1(fk_usuario, fk_post, comentario_post1) {
    // idUser = sessionStorage.ID_USUARIO;

    console.log("Executando a função comentar no Model...");

    var instrucao = `
        INSERT INTO comentario (fk_usuario, fk_post, descricao) VALUES (${fk_usuario}, ${fk_post}, '${comentario_post1}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function comentar_2(fk_usuario, fk_post, comentario_post2) {
    // idUser = sessionStorage.ID_USUARIO;

    console.log("Executando a função comentar no Model...");

    var instrucao  = `
    INSERT INTO comentario (fk_usuario, fk_post, descricao) VALUES (${fk_usuario}, ${fk_post}, '${comentario_post2}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}



/*SELECTS NA TABELA COMENTARIO*/
function exibir_post1(){
     var query = `SELECT usuario.nome, comentario.descricao FROM usuario JOIN comentario ON id_usuario = fk_usuario WHERE fk_post = 1 ORDER BY dt_hora DESC;`;

     return database.executar(query);
}

function exibir_post2(){
     var query = `SELECT usuario.nome, comentario.descricao FROM usuario JOIN comentario ON id_usuario = fk_usuario WHERE fk_post = 2 ORDER BY dt_hora DESC;`;

     return database.executar(query);
}

module.exports = {
    autenticar,
    cadastrar,
    comentar_1, 
    comentar_2, 
    exibir_post1,
    exibir_post2
};