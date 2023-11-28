var idade0_12 = 0;
function de0_a12(){

      fetch("/usuarios/de0_a12", { 
         method: "GET", 
       })     
  
      .then(function (resposta) {
        idade0_12 = resposta;
         if (!resposta.ok) { 
           throw new Error('Erro na requisição');
          }
         return resposta.json();
        });
  }