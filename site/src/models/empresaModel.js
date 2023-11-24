var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from empresa where id = '${id}'`;

  return database.executar(query);
}

// function buscarPorIdUser(emailVar senha) {
//   var query = `select id_usuario from usuario WHERE email = '${emailVar}' AND senha = '${senhaVar}';`;

//   return database.executar(query);
// }


function buscarPorCnpj(cnpj) {
  var query = `select * from empresa where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from endereco`;

  return database.executar(query);
}


function cadastrar(cidadeVar, estadoVar) {
  var query = `INSERT INTO endereco (cidade, estado) VALUES ('${cidadeVar}', '${estadoVar}')`;

  return database.executar(query);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
