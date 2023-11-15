
    function entrar(){
        var email = input_email.value;
        var senha = input_senha.value;

        div_email.innerHTML = ``;
        div_email_errado.innerHTML = ``;

        div_senha.innerHTML = ``;
        div_senha_errado.innerHTML = ``;

        if(email.indexOf('@') >= 0 && email.indexOf('.com') >= 0){
            div_email.innerHTML = `O e-mail está correto!`;
        }else{
            div_email_errado.innerHTML = `O e-mail está incorreto!`;
        }

        if(senha.length >= 8 && (senha.indexOf("@") >= 0 || senha.indexOf("!") >= 0 || senha.indexOf("#") >= 0 || senha.indexOf("$") >= 0 || senha.indexOf(".") >= 0 || senha.indexOf("?") >= 0) || senha.indexOf("%") >= 0 || senha.indexOf("*") >= 0){
            div_senha.innerHTML = `Senha correta!`;
            window.open('perfil.html', '_self'); /*O _self vai substituir a pagina login pela perfil.*/
        }else{
            div_senha_errado.innerHTML = `Senha incorreta!`;
        }
        

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
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
                    sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)

                    setTimeout(function () {
                        window.location = "./dashboard/cards.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        })
    }