    function acessar() {
      /*Recebendo os dados da input*/
      var email = input_email.value;
      var senha = input_senha.value;

      /*Se validado: */
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

        /*Cenario de erro*/
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





      
      /*function novaSenha() {
        var email = input_email.value;
        var container = container_login;
      
        if (email.indexOf('@') >= 0 && (email.indexOf('.com') >= 0 || email.indexOf('.br') >= 0)) {
          container.innerHTML = `
          <h1 class="titulo_recuperar_senha">Recuperar senha</h1>
          
                  <div class="container_input">
                  
                  <div class="container_email">
                      <p class="p_nova_senha"> Digite o código enviado ao e-mail <span id="input_email_recupera"> </span> </p>
                          <input class="input_codigo" id="input_codigo" type="number" placeholder="0000"><br>
                          <p class="p_nova_senha"> Digite a nova senha</p>
                          <input class="input_nova_senha"id="input_nova_senha" type="password" placeholder="xxxxxxxx">
                          <p class="p_nova_senha"> Confirme nova senha</p>
                          <input class="input_nova_senha"id="input_nova_senha_confirma" type="password" placeholder="xxxxxxxx">
                      </div>
      
                      <button class="botao" onclick="recuperar()">Recuperar</button><br>
                      <div id="div_mensagem"></div>
                  </div>
          `
          input_email_recupera.innerHTML = email;
        } else {
          div_mensagem.innerHTML = `Insira o e-mail cadastrado`
          div_mensagem.style = "color: red"
        }
      }
      
      function recuperar() {
        var codigo = input_codigo.value;
        var novaSenha = input_nova_senha.value;
        var novaSenhaConfirma = input_nova_senha_confirma.value;
      
        validaSenha = false;
        validaCombinacao = false;
      
       
      
        if(codigo != 1234){
          console.log(codigo)
          div_mensagem.innerHTML = `Codigo incorreto`;
          div_mensagem.style = "color: red"
        }
        if (novaSenha.length >= 8 &&
          (novaSenha.indexOf('#') >= 0
            || novaSenha.indexOf('!') >= 0
            || novaSenha.indexOf('@') >= 0
            || novaSenha.indexOf('$') >= 0
            || novaSenha.indexOf('%') >= 0
            || novaSenha.indexOf('&') >= 0
            || novaSenha.indexOf('*') >= 0)
        ) {
          validaSenha = true;
        } else {
          div_mensagem.innerHTML = `Sua senha deve possuir ao menos 8 caracteres <br> e pelo menos um caracter especial! <br>`;
          div_mensagem.style = "color: red"
      
        }
      
      
        if (novaSenhaConfirma == novaSenha && novaSenhaConfirma.length >= 8) {
          validaCombinacao = true;
        } else { div_mensagem.innerHTML = `A confirmação deve ser identica a senha! <br>`;div_mensagem.style = "color: red"}
      
        if (codigo == 1234 && validaSenha && validaCombinacao) {
          console.log('entrou')
          window.location.href = `./login.html`;
        }
}*/
      