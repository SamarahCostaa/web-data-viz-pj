function validarDorama(){
  /*Estou pegando os dados para exibir no header*/
    var imagem = sessionStorage.IMAGEM_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;

    /*Estou pegando o id das spans do HTML*/
    var imagem_usuario = document.getElementById("img_imagem");
    var nome_usuario = document.getElementById("nome_usuario");
    var email_usuario = document.getElementById("email_usuario");
    
    var urlDaImagem = imagem;

    if(imagem_usuario && urlDaImagem){ /*se existir a imagem e a url*/
        imagem_usuario.src = urlDaImagem;
    }
    
    if (email !== undefined  && nome !== undefined) {
        imagem_usuario.innerHTML = imagem;
        nome_usuario.innerHTML = nome;
        email_usuario.innerHTML = email;
    } else {
        window.location = "./login.html";
    }
}

/*Todos os comentario que o usuario inserir estão aqui:*/
var lista_comentario1 = [];
var lista_comentario2 = [];


function comentar(idPost){
  /*Dando um parametro para a função que será idPost*/

    var nome = sessionStorage.NOME_USUARIO;
    var fk_usuario = sessionStorage.ID_USUARIO;
    var fk_post = idPost; /*No HTML cada botão de comentar tem uma fk de acordo com o post*/


    var comentario_post1 = input_comentario1.value;
    var comentario_post2 = input_comentario2.value;    

    if(comentario_post1 != ''){
     lista_comentario1.push(comentario_post1);
     div_comentario1.innerHTML +=  `${nome}: ${comentario_post1}<br>`
    } 

    if(comentario_post2 != ''){
     lista_comentario2.push(comentario_post2);
     div_comentario2.innerHTML +=  `${nome}: ${comentario_post2}<br>`
    } 

    /*Enviando para o servidor com a fk do usuario*/
    fetch(`/usuarios/comentar/${fk_usuario}`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
    body: JSON.stringify({
       comentario_post1Server: comentario_post1,
       comentario_post2Server: comentario_post2,
       fk_postServer: fk_post
    }),
  })   
}

function apagar(){
    div_comentario1.innerHTML =  ``;
    div_comentario2.innerHTML =  ``;
}

window.onload = function(){
  exibir_post1()
}

window.onload = function(){
  exibir_post2()
}

function exibir_post1(){
  /*Pegando o id da div*/
  var div_comentario1 = document.getElementById('div_comentario1');

  /*Criando vetores que receberão os json do banco*/
  var comentarios_vetor1 = [];
  var nome_vetor1 = [];

    /*Pegando insformações que já existem no banco*/
    fetch("/usuarios/exibir_post1", { 
       method: "GET", 
     })     

    .then(function (resposta) {
       if (!resposta.ok) { 
         throw new Error('Erro na requisição');
        }
       return resposta.json();
      })
     /*Criando uma função anonima, e na 'resposta' será armazenado os dados coletados antes*/ 
    .then((resposta) => { 
     comentarios_vetor1 = resposta;
     nome_vetor1 = resposta;
     
     var tamanho_comentario = comentarios_vetor1.length;
     var tamanho_nome = nome_vetor1.length;

    for (var i = 0; i < tamanho_comentario; i++) {

     var comentario_Atual = comentarios_vetor1[i].descricao;
     var nome_atual = nome_vetor1[i].nome;

     div_comentario1.innerHTML += `<br>${nome_atual}: ${comentario_Atual}<br>`;
    }
  });
}

function exibir_post2(){
   /*Pegando o id da div*/
   var div_comentario2 = document.getElementById('div_comentario2');

   /*Criando vetores que receberão os json do banco*/
   var comentarios_vetor2 = [];
   var nome_vetor2 = [];

  //  comentarios_vetor2.push( comentario_post2)
 
     /*Pegando insformações que já existem no banco*/
     fetch("/usuarios/exibir_post2", { 
        method: "GET", 
      })     
 
     .then(function (resposta) {
        if (!resposta.ok) { 
          throw new Error('Erro na requisição');
         }
        return resposta.json();
       })

      /*Criando uma função anonima, e na 'resposta' será armazenado os dados coletados antes*/ 
     .then((resposta) => { 
      comentarios_vetor2 = resposta;
      nome_vetor2 = resposta;
      
      var tamanho_comentario2 = comentarios_vetor2.length;
      var tamanho_nome2 = nome_vetor2.length;
 
     for (var i = 0; i < tamanho_comentario2; i++) {
 
      var comentario_Atual = comentarios_vetor2[i].descricao;
      var nome_atual = nome_vetor2[i].nome;
 
      div_comentario2.innerHTML += `<br>${nome_atual}: ${comentario_Atual}<br>`;
     }
   });
}

