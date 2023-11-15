var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var enderecoId = req.body.enderecoId;
  var cidadeVar = req.body.cidadeVar;
  var estadoVar = req.body.estadoVar;
  // var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorCidade(cidadeVar).then((resultado) => {
    // if (resultado.length > 0) {
    //   res
    //     .status(401)
    //     .json({ mensagem: `a empresa com o cidade ${cnpj} já existe` });
    // } else {
      empresaModel.cadastrar(cidadeVar, estadoVar, enderecoId).then((resultado) => {
        res.status(201).json(resultado);
      });
  });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
