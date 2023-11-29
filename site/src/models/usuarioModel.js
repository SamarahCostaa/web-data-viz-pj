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

function comentar_3(fk_usuario, fk_post, comentario_post3) {
    // idUser = sessionStorage.ID_USUARIO;

    console.log("Executando a função comentar no Model...");

    var instrucao  = `
    INSERT INTO comentario (fk_usuario, fk_post, descricao) VALUES (${fk_usuario}, ${fk_post}, '${comentario_post3}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function comentar_4(fk_usuario, fk_post, comentario_post4) {
    // idUser = sessionStorage.ID_USUARIO;

    console.log("Executando a função comentar no Model...");

    var instrucao  = `
    INSERT INTO comentario (fk_usuario, fk_post, descricao) VALUES (${fk_usuario}, ${fk_post}, '${comentario_post4}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function comentar_5(fk_usuario, fk_post, comentario_post5) {
    // idUser = sessionStorage.ID_USUARIO;

    console.log("Executando a função comentar no Model...");

    var instrucao  = `
    INSERT INTO comentario (fk_usuario, fk_post, descricao) VALUES (${fk_usuario}, ${fk_post}, '${comentario_post5}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function comentar_6(fk_usuario, fk_post, comentario_post6) {
    // idUser = sessionStorage.ID_USUARIO;

    console.log("Executando a função comentar no Model...");

    var instrucao  = `
    INSERT INTO comentario (fk_usuario, fk_post, descricao) VALUES (${fk_usuario}, ${fk_post}, '${comentario_post6}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}



/*SELECTS NAS TABELAS*/
function exibir_post1(){
     var query = `SELECT usuario.nome, comentario.descricao FROM usuario JOIN comentario ON id_usuario = fk_usuario WHERE fk_post = 1 ORDER BY dt_hora DESC;`;

     return database.executar(query);
}

function exibir_post2(){
     var query = `SELECT usuario.nome, comentario.descricao FROM usuario JOIN comentario ON id_usuario = fk_usuario WHERE fk_post = 2 ORDER BY dt_hora DESC;`;

     return database.executar(query);
}

function de0_a12(){
    var query = `SELECT COUNT(idade) FROM usuario WHERE idade <= 12;`;

    return database.executar(query);
}

function de13_a19(){
    
    var query = `SELECT COUNT(idade) FROM usuario WHERE idade  >= 13 AND idade <= 19;`;

    return database.executar(query);
}

function de20_a25(){
    var query = `SELECT COUNT(idade) FROM usuario WHERE idade  >= 20 AND idade <= 25;`;

    return database.executar(query);
    
}

function de26_a30(){
    var query = `SELECT COUNT(idade) FROM usuario WHERE idade  >= 26 AND idade <= 30;`;
    return database.executar(query); 
}

function mais_que_30(){
    var query = `SELECT COUNT(idade) FROM usuario WHERE idade  >= 30;`;

    return database.executar(query);    
}

function exibir_feminino(){
    var query = `SELECT COUNT(genero) FROM usuario WHERE genero = 'Feminino';`;

    return database.executar(query)
}

function exibir_masculino(){
    var query = `SELECT COUNT(genero) FROM usuario WHERE genero = 'Masculino';`;

    return database.executar(query)
}

function exibir_outro(){
    var query = `SELECT COUNT(genero) FROM usuario WHERE genero = 'Outro';`;

    return database.executar(query)
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
    de0_a12,
    de13_a19,
    de20_a25,
    de26_a30,
    mais_que_30,
    exibir_post1,
    exibir_post2,
    exibir_feminino,
    exibir_masculino,
    exibir_outro
};