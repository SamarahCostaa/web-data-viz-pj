function validar(){

   var imagemVar = input_imagem.value;
   var nomeVar = input_nome.value;
   var emailVar = input_email.value;
   var idadeVar = input_idade.value;
   var generoVar = input_genero.value;
   var cidadeVar = input_cidade.value;
   var estadoVar = input_estado.value;
   var senhaVar = input_senha.value;
   var confirma_senhaVar = input_confirma_senha.value;

//    var validado = (nomeVar.length >= 2) && (emailVar.indexOf('@') >= 0 && emailVar.indexOf('.') >= 0) && (cidadeVar.length > 0) && (estadoVar.length > 0) && (idadeVar.length > 0) && (senhaVar.length >= 8 && confirma_senhaVar == senhaVar);

    div_nome.innerHTML = ``;
    div_nome_errado.innerHTML = ``;
    
    div_email.innerHTML = ``;
    div_email_errado.innerHTML = ``;
    
    div_idade.innerHTML = ``;
    div_idade_errado.innerHTML = ``;
    
    div_genero.innerHTML = ``;
    div_genero_errado.innerHTML = ``;
    
    div_cidade.innerHTML = ``;
    div_cidade_errado.innerHTML = ``;
    
    div_estado.innerHTML = ``;
    div_estado_errado.innerHTML = ``;
    
    div_senha.innerHTML = ``;
    div_senha_errado.innerHTML = ``;
    
    div_confirma.innerHTML = ``;
    div_confirma_errado.innerHTML = ``;
    
    
    if(nomeVar.length >= 2){
        div_nome.innerHTML = `O nome está válido!`;
    }else{
        div_nome_errado.innerHTML = `O nome está inválido!`
    }
    
    if(emailVar.indexOf('@') >= 0 && emailVar.indexOf('.') >= 0){
        div_email.innerHTML = `O e-mail está válido!`;
    }else{
        div_email_errado.innerHTML = `O e-mail está inválido!`;
    }

    if(generoVar == 'feminino'.toLocaleLowerCase() || generoVar == 'masculino'.toLocaleLowerCase() || generoVar == 'outro'.toLocaleLowerCase()){
        div_genero.innerHTML = `O gênero está válido!`;
    }else{
        div_genero_errado.innerHTML = `O genêro está inválido!`;
    }
    
    if(cidadeVar.length > 0){
        div_cidade.innerHTML = `A cidade está válido!`;
    }else{
        div_cidade_errado.innerHTML = `O campo deve ser preenchido!`;
    }
    
    if(estadoVar.length > 0){
        div_estado.innerHTML = `O estado está válido!`;
    }else{
        div_estado_errado.innerHTML = `O campo deve ser preenchido!`;
    }
    
    if(idadeVar.length > 0){
        div_idade.innerHTML = `A idade está válido!`;
    }else{
        div_idade_errado.innerHTML = `O campo deve ser preenchido!`;
    }
    
    if(confirma_senhaVar.length <= 0){
        div_confirma_errado.innerHTML = `O campo deve ser preenchido!`;
    }
    
    if(senhaVar.length >= 8 && (senhaVar.indexOf("@") >= 0 || senhaVar.indexOf("!") >= 0 || senhaVar.indexOf("#") >= 0 || senhaVar.indexOf("$") >= 0 || senhaVar.indexOf(".") >= 0 || senhaVar.indexOf("?") >= 0) || senhaVar.indexOf("%") >= 0 || senhaVar.indexOf("*") >= 0){
        div_senha.innerHTML = `A senha está válida!`;
    
        if(confirma_senhaVar == senhaVar){
        div_confirma.innerHTML = `A senha está válida!`;
        }
        else{
        div_confirma_errado.innerHTML = `Digite a mesma senha acima!`;
    }
    
    }else{
        div_senha_errado.innerHTML = `A senha deve conter no minimo 8 caráteres.
        <br> Insira no minimo 1 caráter especial!`;
    }

}

function cadastrar(){
    
    var imagemVar = input_imagem.value;
    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var idadeVar = Number(input_idade.value);
    var generoVar = input_genero.value;
    // var cidadeVar = input_cidade.value;
    // var estadoVar = input_estado.value;
    var senhaVar = input_senha.value;
    var confirma_senhaVar = input_confirma_senha.value;
    var validado =  (nomeVar.length >= 2) && (emailVar.indexOf('@') >= 0 && emailVar.indexOf('.') >= 0) && (idadeVar.length > 0) && (senhaVar.length >= 8 && confirma_senhaVar == senhaVar);
    validar();
    
  fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        imagemServer: imagemVar,
        idadeServer: idadeVar,
        generoServer: generoVar,
        // cidadeServer: cidadeVar,
        // estadoServer: estadoVar,
        senhaServer: senhaVar,
        // enderecoServer: enderecoVar

      }),
    })
    if(validado == true){
        window.open('login.html', '_self');
    }
}

