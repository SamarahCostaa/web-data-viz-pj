function validarDorama(){
    var imagem = sessionStorage.IMAGEM_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    // var idUser = sessionStorage.ID_USUARIO;

    var imagem_usuario = document.getElementById("img_imagem");
    var nome_usuario = document.getElementById("nome_usuario");
    var email_usuario = document.getElementById("email_usuario");
    
    var urlDaImagem = imagem;

    if(imagem_usuario && urlDaImagem){
        imagem_usuario.src = urlDaImagem;
    }
    
    if (email !== undefined  && nome !== undefined) { /*se existir a imagem e a url*/
        imagem_usuario.innerHTML = imagem;
        nome_usuario.innerHTML = nome;
        email_usuario.innerHTML = email;
    } else {
        window.location = "./login.html";
    }


}

var lista_comentario1 = [];
// var lista_comentario2 = [];


function comentar(idPost){
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var fk_usuario = sessionStorage.ID_USUARIO;
    var fk_post = idPost;
    var comentario_post1 = input_comentario1.value;
    // var comentario_post2 = input_comentario2.value;


    if(comentario_post1 != ''){
    lista_comentario1.push(comentario_post1);
    div_comentario1.innerHTML +=  `${nome}: ${comentario_post1}<br>`
    } 
    fetch(`/usuarios/comentar/${fk_usuario}`, {
        method: "POST", //GET é 'select'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comentario_post1Server: comentario_post1,
        //   comentario_post2Server: comentario_post2,
          fk_postServer: fk_post
        }),
      })    
      
}

function apagar(){
    div_comentario1.innerHTML =  ``;
    div_comentario2.innerHTML =  ``;
}

// function listar() {
//   fetch("/empresas/listar", {
//     method: "GET",
//   })
//     .then(function (resposta) {
//       resposta.json().then((empresas) => {
//         empresas.forEach((empresa) => {
//           listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
//         });
//       });
//     })
//     .catch(function (resposta) {
//       console.log(`#ERRO: ${resposta}`);
//     });
// }
function exibir_post1(){

  var div_comentario1 = document.getElementById('div_comentario1');

  // var nome = sessionStorage.NOME_USUARIO;
  var comentarios_vetor1 = [];
  var nome_vetor1 = [];

  


    fetch("/usuarios/exibir_post1", { 
        method: "GET", 
      })     
      .then(function (resposta) {
        if (!resposta.ok) {
          throw new Error('Erro na requisição');
        }
        return resposta.json();
      })
      
      .then((resposta) => {
        comentarios_vetor1 = resposta;
        nome_vetor1 = resposta;
        var tamanho_comentario = comentarios_vetor1.length;
        var tamanho_nome = nome_vetor1.length;

  
        for (var i = 0; i < tamanho_comentario; i++) {

          var comentario_Atual = comentarios_vetor1[i].descricao;
          var nome_atual = nome_vetor1[i].nome;

          div_comentario1.innerHTML += `${nome_atual}: ${comentario_Atual}<br>`;
          // div_comentario1.innerHTML += ``;
        }
      });

      

      
      // .then(function (response) {
      //   var tamanho_comentario = comentarios_vetor1.length;

      //   for(var i = 0; i < tamanho_comentario; i++){
      //       var comentario_Atual = comentarios_vetor1[i];
      //       div_comentario1.innerHTML += `${nome}: ${comentario_Atual}<br>`
      //   }
        
      //   if (response.ok) {
      //     throw new Error('Erro na requisição');
      //   }
      //   return response.json(); // ou response.text(), dependendo do tipo de resposta
      // })  
}

window.onload = function(){
  exibir_post1()
}

// function exibir(){
//     var nome = sessionStorage.NOME_USUARIO;
//     // var nome_usuario_comentario = document.getElementById("span_nome_comentario");
//     // nome_usuario.innerHTML = nome;

//     var comentario_post1 = input_comentario1.value;
//     var comentario_post2 = input_comentario2.value;
    
//     if(comentario_post1){
//     for(var i = 0; i < lista_comentario1.length; i++){
//         lista_comentario1[i];
//         div_comentario1.innerHTML += `${nome}: ${lista_comentario1[i]}<br>`;
//     }
// }
//     if(comentario_post2){
//     for(var i = 0; i < lista_comentario2.length; i++){
//         lista_comentario2[i];
//         div_comentario2.innerHTML += `${nome}: ${lista_comentario2[i]}<br>`;
//     }
// }

// }
