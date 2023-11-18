function validarSessao(){
    var imagem = sessionStorage.IMAGEM_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var genero = sessionStorage.GENERO_USUARIO;
    var idade = sessionStorage.IDADE_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;

    var imagem_usuario = document.getElementById("img_imagem");
    var mini_imagem_usuario = document.getElementById("img_mini_imagem");
    var nome_usuario = document.getElementById("nome_usuario");
    var genero_usuario = document.getElementById("genero_usuario");
    var idade_usuario = document.getElementById("idade_usuario");
    var email_usuario = document.getElementById("email_usuario");
    
    var urlDaImagem = imagem;

    if(imagem_usuario && urlDaImagem){
        imagem_usuario.src = urlDaImagem;
        mini_imagem_usuario.src = sessionStorage.IMAGEM_USUARIO;

    }
    
    if (email !== undefined  && nome !== undefined) { /*se existir a imagem e a url*/
        imagem_usuario.innerHTML = imagem;
        nome_usuario.innerHTML = nome;
        genero_usuario.innerHTML = genero;
        idade_usuario.innerHTML = idade;
        email_usuario.innerHTML = email;
    } else {
        window.location = "./login.html";
    }
}

// function limparSessao() {
//     sessionStorage.clear();
//     window.location = "./login.html";
// }

// function validarSessao(){
//     var email = sessionStorage.EMAIL_USUARIO;
//     var nome = sessionStorage.NOME_USUARIO;

//     var mensagem_usuario = document.getElementById("mensagem_usuario");

//     if (email != null && nome != null) {
//         mensagem_usuario.innerHTML = nome;
//     } else {
//         window.location = "./login.html";
//     }
// }

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

