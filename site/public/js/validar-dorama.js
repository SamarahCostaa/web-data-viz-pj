function validarDorama(){
    var imagem = sessionStorage.IMAGEM_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;

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
var lista_comentario2 = [];

function comentar(){
    var nome = sessionStorage.NOME_USUARIO;
    var comentario_post1 = input_comentario1.value;
    var comentario_post2 = input_comentario2.value;
    // var idUser = sessionStorage.ID_USUARIO;

    


    if(comentario_post1 != ''){
    lista_comentario1.push(comentario_post1);
    div_comentario1.innerHTML +=  `${nome}: ${comentario_post1}<br>`
    } 
    
    else if(comentario_post2 != ''){
        lista_comentario2.push(comentario_post2);
        div_comentario2.innerHTML +=  `${nome}: ${comentario_post2}<br>`

    }

    fetch("/usuarios/comentar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comentario_post1Server: comentario_post1,
          comentario_post2Server: comentario_post2,
        //   idUserServer: idUser
        //   nomeServer: nomeVar,
        }),
      })
    //   resposta.json().then(json => {

    //     // console.log(json[0].nome); //está pegando o nome do primeiro item do vetor
    //     console.log(JSON.stringify(json));
    //     sessionStorage.ID_USUARIO = json[0].id;
    //     // apenas para exibir o loading
    // });

}

function apagar(){
    div_comentario1.innerHTML =  ``;
    div_comentario2.innerHTML =  ``;
}

function exibir(){
    var nome = sessionStorage.NOME_USUARIO;
    // var nome_usuario_comentario = document.getElementById("span_nome_comentario");
    // nome_usuario.innerHTML = nome;


    var comentario_post1 = input_comentario1.value;
    var comentario_post2 = input_comentario2.value;
    
    if(comentario_post1){
    for(var i = 0; i < lista_comentario1.length; i++){
        lista_comentario1[i];
        div_comentario1.innerHTML += `${nome}: ${lista_comentario1[i]}<br>`;
    }
}
    if(comentario_post2){
    for(var i = 0; i < lista_comentario2.length; i++){
        lista_comentario2[i];
        div_comentario2.innerHTML += `${nome}: ${lista_comentario2[i]}<br>`;
    }
}

}
