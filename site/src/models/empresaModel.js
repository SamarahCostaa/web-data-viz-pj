var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from empresa where id = '${id}'`;

  return database.executar(query);
}
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
