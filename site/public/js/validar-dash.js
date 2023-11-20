function validarDash(){
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