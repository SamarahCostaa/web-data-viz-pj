    function acessar() {

      var email = input_email.value;
      var senha = input_senha.value;

      if (email.indexOf('@') >= 0 && (email.indexOf('.com') >= 0 || email.indexOf('.br') >= 0) && senha.length >= 8 ) {

       /*Enviando para o servidor*/
       fetch("/usuarios/autenticar", {
         method: "POST",
         headers: {
         "Content-Type": "application/json"
        },
        body: JSON.stringify({
         emailServer: email,
         senhaServer: senha
        })
      })

      /*O then significa, se fetch deu certo, então faça isso*/
      .then(function (resposta) {
         console.log("ESTOU NO THEN DO entrar()!")
      
        if (resposta.status == 200) {
         resposta.json().then(json => {
           
           /*Como os dados vem em json dentro de um vetor, estou pegando a primeira posição*/
           console.log(JSON.stringify(json));
           sessionStorage.ID_USUARIO = json[0].id_usuario;
           sessionStorage.IMAGEM_USUARIO = json[0].url_imagem;
           sessionStorage.NOME_USUARIO = json[0].nome;
           sessionStorage.EMAIL_USUARIO = json[0].email;
           sessionStorage.IDADE_USUARIO = json[0].idade;
           sessionStorage.GENERO_USUARIO = json[0].genero;
           window.location.href = "./perfil.html";
  
          });
      
        }

        else {
         console.log("Houve um erro ao tentar realizar o login!");
         div_senha_errado.innerHTML = `Senha ou email invalidos!`

         resposta.text().then(texto => {
           console.error(texto);
          });
        }
      }).catch(function (erro) {
        console.log(erro);
      })
      }

    else {
     div_senha_errado.innerHTML = `Email ou senha incorreta!`;
    }      
}   