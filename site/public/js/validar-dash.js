function validarDash(){
    /*Aqui só estou pegando as informações do cadastro para exibir a imagem do usuario no header*/
    var imagem = sessionStorage.IMAGEM_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
//     var email = sessionStorage.EMAIL_USUARIO;

    var imagem_usuario = document.getElementById("img_imagem");
    var nome_usuario = document.getElementById("nome_usuario");
//     var email_usuario = document.getElementById("email_usuario");
    
    var urlDaImagem = imagem;

    if(imagem_usuario && urlDaImagem){ /*se existir a imagem e a url*/
         imagem_usuario.src = urlDaImagem;
    }else{
         imagem_usuario.src = './assets/icon/perfil.png'
    }
    
    if (nome !== undefined) { 
         imagem_usuario.innerHTML = imagem;
         nome_usuario.innerHTML = nome;
     //     email_usuario.innerHTML = email;
    } 
    else {
         window.location = "./login.html"; 
    }
}