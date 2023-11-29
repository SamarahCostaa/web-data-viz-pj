/*CRIEI VETORES*/ 
var resposta_romance = [40];
var resposta_suspense = [33];
var resposta_acao = [11];
var resposta_sobrevivencia = [29];

/*VARIÁVEL QUE GUARDARÁ A SOMA DE TODOS OS VOTOS DA ENQUETE CATEGORIA*/
var resultado_porcentagem = 0;

/*PERCORRI AS LISTAS PARA SOMAR O TOTAL DE VOTOS*/
for(var i = 0; i < resposta_romance.length; i++){
    resultado_porcentagem = resposta_romance[i] + resposta_suspense[i] + resposta_acao[i] + resposta_sobrevivencia[i];
}

/*REATRIBUI O VALOR DAS VARIÁVEIS PARA DEIXAR OS NOMES MAIS CLAROS*/
var suspense_porcentagem = resultado_porcentagem;
var romance_porcentagem = resultado_porcentagem;    
var acao_porcentagem = resultado_porcentagem;
var sobrevivencia_porcentagem = resultado_porcentagem;

/*lIMPANDO AS DIVS E 'ESCONDENDO' OS RESULTADOS*/
function limpar_div(){
    div_resultado_enquete.style.display = 'none';
    div_resultado_pais.style.display = 'none';
    div_resultado_pousando.style.display = 'none';
    div_mensagem.innerHTML = ``;
    div_mensagem_pais.innerHTML = ``;
    div_mensagem_pousando.innerHTML = ``;
}

function romance(){
var contador_romance = 0;

/*ESTOU SOMANDO TODOS OS VOTOS DA LISTA DE ROMANCE*/
for(var i = 0; i < resposta_romance.length; i++){
     contador_romance += resposta_romance[i];
    } 

/*SE TODAS AS LISTAS TIVEM APENAS UM UNICO VALOR, ENTÃO O USUÁRIO AINDA NÃO VOTOU*/
 if(resposta_romance.length == 1 && resposta_suspense.length == 1 && resposta_acao.length == 1 && resposta_sobrevivencia.length == 1){

/*QUANDO ELE CLICAR NESSA OPÇÃO VOU SOMAR MAIS 1 VOTO*/
 resposta_romance.push(1);

/*USEI PARA MUDAR A CLASSE, SEMELHANTE AO HEADER*/
 if(botao_romance.classList.contains('borda-enquete')){
     botao_romance.classList.remove('borda-enquete');
     botao_romance.classList.add('menu-selecionado-enquete')
}

/*FAÇO UM NOVO FOR PARA COMTABILIZAR COM O VOTO DELE*/
contador_romance = 0;
for(var i = 0; i < resposta_romance.length; i++){
     contador_romance += resposta_romance[i];
    }

/*UMA OPERAÇÃO MATEMÁTICA, PEGO OS VOTOS DESSA OPÇÃO x 100 E DIVIDO PELA QUANTIDADE TOTAL DE VOTOS NA ENQUETE, PARA ASSIM TER A PORCENTAGEM DAQUELA OPÇÃO */
 romance_porcentagem = (contador_romance * 100) / resultado_porcentagem; 
 div_exibir_resultado.innerHTML = `O romance equivale a ${romance_porcentagem.toFixed(0)}% dos votos`
 div_resultado_enquete.style.display = 'block';
}

 else if(resposta_romance.length > 1){ 

 romance_porcentagem = (contador_romance * 100) / resultado_porcentagem; 

 div_exibir_resultado.innerHTML = `O romance equivale a ${romance_porcentagem.toFixed(0)}% dos votos`
 div_resultado_enquete.style.display = 'block';
 div_mensagem.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
 
} else{
 romance_porcentagem = (contador_romance * 100) / resultado_porcentagem; 

 div_mensagem.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
 div_exibir_resultado.innerHTML = `O romance equivale a ${romance_porcentagem.toFixed(0)}% dos votos`
 div_resultado_enquete.style.display = 'block';
 }
}

function suspense(){

 var contador_suspense = 0;
 for(var i = 0; i < resposta_suspense.length; i++){
     contador_suspense += resposta_suspense[i];
    } 
 if(resposta_romance.length == 1 && resposta_suspense.length == 1 && resposta_acao.length == 1 && resposta_sobrevivencia.length == 1){
 resposta_suspense.push(1);


 if(botao_suspense.classList.contains('borda-enquete')){
     botao_suspense.classList.remove('borda-enquete');
     botao_suspense.classList.add('menu-selecionado-enquete')
}
contador_suspense = 0;

for(var i = 0; i < resposta_suspense.length; i++){
     contador_suspense += resposta_suspense[i];
    }

 suspense_porcentagem = (contador_suspense * 100) / resultado_porcentagem; 
 div_exibir_resultado.innerHTML = `O suspense equivale a ${suspense_porcentagem.toFixed(0)}% dos votos`
 div_resultado_enquete.style.display = 'block';
}


else if(resposta_suspense.length > 1){ 

 suspense_porcentagem = (contador_suspense * 100) / resultado_porcentagem; 
         
 div_exibir_resultado.innerHTML = `O suspense equivale a ${suspense_porcentagem.toFixed(0)}% dos votos`
 div_mensagem.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
 div_resultado_enquete.style.display = 'block';
         
 } else{
 suspense_porcentagem = (contador_suspense * 100) / resultado_porcentagem; 
 
 div_mensagem.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
 div_exibir_resultado.innerHTML = `O suspense equivale a ${suspense_porcentagem.toFixed(0)}% dos votos`
 div_resultado_enquete.style.display = 'block';
 }

}
 
function acao(){

var contador_acao = 0;
for(var i = 0; i < resposta_acao.length; i++){
    contador_acao += resposta_acao[i];
   } 
if(resposta_romance.length == 1 && resposta_suspense.length == 1 && resposta_acao.length == 1 && resposta_sobrevivencia.length == 1){
resposta_acao.push(1);


if(botao_acao.classList.contains('borda-enquete')){
    botao_acao.classList.remove('borda-enquete');
    botao_acao.classList.add('menu-selecionado-enquete')
}
contador_acao = 0;

for(var i = 0; i < resposta_acao.length; i++){
    contador_acao += resposta_acao[i];
   }

acao_porcentagem = (contador_acao * 100) / resultado_porcentagem; 
div_exibir_resultado.innerHTML = `A ação equivale a ${acao_porcentagem.toFixed(0)}% dos votos`
div_resultado_enquete.style.display = 'block';
}


else if(resposta_acao.length > 1){ 

acao_porcentagem = (contador_acao * 100) / resultado_porcentagem; 
        
div_exibir_resultado.innerHTML = `A ação equivale a ${acao_porcentagem.toFixed(0)}% dos votos`
div_mensagem.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_enquete.style.display = 'block';
        
}else{
acao_porcentagem = (contador_acao * 100) / resultado_porcentagem; 

div_mensagem.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado.innerHTML = `A ação equivale a ${acao_porcentagem.toFixed(0)}% dos votos`
div_resultado_enquete.style.display = 'block';
}

}

function sobrevivencia(){

var contador_sobrevivencia = 0;
for(var i = 0; i < resposta_sobrevivencia.length; i++){
    contador_sobrevivencia += resposta_sobrevivencia[i];
   } 
if(resposta_romance.length == 1 && resposta_suspense.length == 1 && resposta_acao.length == 1 && resposta_sobrevivencia.length == 1){
resposta_sobrevivencia.push(1);


if(botao_sobrevivencia.classList.contains('borda-enquete')){
    botao_sobrevivencia.classList.remove('borda-enquete');
    botao_sobrevivencia.classList.add('menu-selecionado-enquete')
}
contador_sobrevivencia = 0;

for(var i = 0; i < resposta_sobrevivencia.length; i++){
    contador_sobrevivencia += resposta_sobrevivencia[i];
   }

sobrevivencia_porcentagem = (contador_sobrevivencia * 100) / resultado_porcentagem; 
div_exibir_resultado.innerHTML = `A sobrevivência equivale a ${sobrevivencia_porcentagem.toFixed(0)}% dos votos`
div_resultado_enquete.style.display = 'block';
}


else if(resposta_sobrevivencia.length > 1){ 

sobrevivencia_porcentagem = (contador_sobrevivencia * 100) / resultado_porcentagem; 
        
div_exibir_resultado.innerHTML = `O sobrevivência equivale a ${sobrevivencia_porcentagem.toFixed(0)}% dos votos`
div_mensagem.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_enquete.style.display = 'block';
        
}else{
sobrevivencia_porcentagem = (contador_sobrevivencia * 100) / resultado_porcentagem; 

div_mensagem.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado.innerHTML = `A sobrevivência equivale a ${sobrevivencia_porcentagem.toFixed(0)}% dos votos`
div_resultado_enquete.style.display = 'block';
}

}




                                                                /*SEGUNDA ENQUETE*/
var resposta_coreia = [28];
var resposta_china = [26];
var resposta_japao = [13];
var resposta_tailandia = [25];
var resposta_taiwan = [21];

var resultado_pais_porcentagem = 0;


for(var i = 0; i < resposta_coreia.length; i++){
    resultado_pais_porcentagem = resposta_coreia[i] + resposta_china[i] + resposta_japao[i] + resposta_tailandia[i] + resposta_taiwan[i];
}

var coreia_porcentagem = resultado_pais_porcentagem;
var china_porcentagem = resultado_pais_porcentagem;
var japao_porcentagem = resultado_pais_porcentagem;
var tailandia_porcentagem = resultado_pais_porcentagem;
var taiwan_porcentagem = resultado_pais_porcentagem;


function coreia(){
var contador_coreia = 0;
for(var i = 0; i < resposta_coreia.length; i++){
    contador_coreia += resposta_coreia[i];
   } 
if(resposta_coreia.length == 1 && resposta_china.length == 1 && resposta_japao.length == 1 && resposta_tailandia.length == 1 && resposta_taiwan.length == 1){
resposta_coreia.push(1);


if(botao_coreia.classList.contains('borda-enquete')){
    botao_coreia.classList.remove('borda-enquete');
    botao_coreia.classList.add('menu-selecionado-enquete')
}
contador_coreia = 0;

for(var i = 0; i < resposta_coreia.length; i++){
    contador_coreia += resposta_coreia[i];
   }

coreia_porcentagem = (contador_coreia * 100) / resultado_porcentagem; 
div_exibir_resultado_pais.innerHTML = `A Coreia equivale a ${coreia_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}


else if(resposta_coreia.length > 1){ 

coreia_porcentagem = (contador_coreia * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pais.innerHTML = `A Coreia equivale a ${coreia_porcentagem.toFixed(0)}% dos votos`
div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pais.style.display = 'block';
        
}else{
coreia_porcentagem = (contador_coreia * 100) / resultado_porcentagem; 

div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pais.innerHTML = `A Coreia equivale a ${coreia_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}

}

function china(){
var contador_china = 0;
for(var i = 0; i < resposta_china.length; i++){
    contador_china += resposta_china[i];
   } 
if(resposta_coreia.length == 1 && resposta_china.length == 1 && resposta_japao.length == 1 && resposta_tailandia.length == 1 && resposta_taiwan.length == 1){
resposta_china.push(1);


if(botao_china.classList.contains('borda-enquete')){
    botao_china.classList.remove('borda-enquete');
    botao_china.classList.add('menu-selecionado-enquete')
}
contador_china = 0;

for(var i = 0; i < resposta_china.length; i++){
    contador_china += resposta_china[i];
   }

china_porcentagem = (contador_china * 100) / resultado_porcentagem; 
div_exibir_resultado_pais.innerHTML = `A China equivale a ${china_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}


else if(resposta_china.length > 1){ 

china_porcentagem = (contador_china * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pais.innerHTML = `A China equivale a ${china_porcentagem.toFixed(0)}% dos votos`
div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pais.style.display = 'block';
        
}else{
china_porcentagem = (contador_china * 100) / resultado_porcentagem; 

div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pais.innerHTML = `A China equivale a ${china_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}

}

function japao(){
var contador_japao = 0;
for(var i = 0; i < resposta_japao.length; i++){
    contador_japao += resposta_japao[i];
   } 
if(resposta_coreia.length == 1 && resposta_china.length == 1 && resposta_japao.length == 1 && resposta_tailandia.length == 1 && resposta_taiwan.length == 1){
resposta_coreia.push(1);


if(botao_japao.classList.contains('borda-enquete')){
    botao_japao.classList.remove('borda-enquete');
    botao_japao.classList.add('menu-selecionado-enquete')
}
contador_japao = 0;

for(var i = 0; i < resposta_japao.length; i++){
    contador_japao += resposta_japao[i];
   }

japao_porcentagem = (contador_japao * 100) / resultado_porcentagem; 
div_exibir_resultado_pais.innerHTML = `A japao equivale a ${japao_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}


else if(resposta_japao.length > 1){ 

japao_porcentagem = (contador_japao * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pais.innerHTML = `A Japão equivale a ${japao_porcentagem.toFixed(0)}% dos votos`;
div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pais.style.display = 'block';
        
}else{
japao_porcentagem = (contador_japao * 100) / resultado_porcentagem; 

div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pais.innerHTML = `A Japão equivale a ${japao_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}
}

function tailandia(){
var contador_tailandia = 0;
for(var i = 0; i < resposta_tailandia.length; i++){
    contador_tailandia += resposta_tailandia[i];
   } 
if(resposta_coreia.length == 1 && resposta_china.length == 1 && resposta_japao.length == 1 && resposta_tailandia.length == 1 && resposta_taiwan.length == 1){
resposta_coreia.push(1);


if(botao_tailandia.classList.contains('borda-enquete')){
    botao_tailandia.classList.remove('borda-enquete');
    botao_tailandia.classList.add('menu-selecionado-enquete')
}
contador_tailandia = 0;

for(var i = 0; i < resposta_tailandia.length; i++){
    contador_tailandia += resposta_tailandia[i];
   }

tailandia_porcentagem = (contador_tailandia * 100) / resultado_porcentagem; 
div_exibir_resultado_pais.innerHTML = `A Tailândia equivale a ${tailandia_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}


else if(resposta_tailandia.length > 1){ 

tailandia_porcentagem = (contador_tailandia * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pais.innerHTML = `A Tailândia equivale a ${tailandia_porcentagem.toFixed(0)}% dos votos`
div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pais.style.display = 'block';
        
}else{
tailandia_porcentagem = (contador_tailandia * 100) / resultado_porcentagem; 

div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pais.innerHTML = `A Tailândia equivale a ${tailandia_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}

}

function taiwan(){
var contador_taiwan = 0;
for(var i = 0; i < resposta_taiwan.length; i++){
    contador_taiwan += resposta_taiwan[i];
   } 
if(resposta_coreia.length == 1 && resposta_china.length == 1 && resposta_japao.length == 1 && resposta_tailandia.length == 1 && resposta_taiwan.length == 1){
resposta_coreia.push(1);


if(botao_taiwan.classList.contains('borda-enquete')){
    botao_taiwan.classList.remove('borda-enquete');
    botao_taiwan.classList.add('menu-selecionado-enquete')
}
contador_taiwan = 0;

for(var i = 0; i < resposta_taiwan.length; i++){
    contador_taiwan += resposta_taiwan[i];
   }

taiwan_porcentagem = (contador_taiwan * 100) / resultado_porcentagem; 
div_exibir_resultado_pais.innerHTML = `A Taiwan equivale a ${taiwan_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}


else if(resposta_taiwan.length > 1){ 

taiwan_porcentagem = (contador_taiwan * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pais.innerHTML = `A Taiwan equivale a ${taiwan_porcentagem.toFixed(0)}% dos votos`
div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pais.style.display = 'block';
        
}else{
taiwan_porcentagem = (contador_taiwan * 100) / resultado_porcentagem; 

div_mensagem_pais.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pais.innerHTML = `A Taiwan equivale a ${taiwan_porcentagem.toFixed(0)}% dos votos`
div_resultado_pais.style.display = 'block';
}

}



                                                            /*TERCEIRA ENQUETE*/
var resposta_amei = [56];
var resposta_bom = [34];
var resposta_nao_gostei = [10];
var resposta_odiei = [13];

var resultado_pousando_porcentagem = 0;


for(var i = 0; i < resposta_amei.length; i++){
    resultado_pousando_porcentagem = resposta_amei[i] + resposta_bom[i] + resposta_nao_gostei[i] + resposta_odiei[i];
}

var amei_porcentagem = resultado_pousando_porcentagem;
var bom_porcentagem = resultado_pousando_porcentagem;
var nao_gostei_porcentagem = resultado_pousando_porcentagem;
var odiei_porcentagem = resultado_pousando_porcentagem;

function amei(){
var contador_amei = 0;
for(var i = 0; i < resposta_amei.length; i++){
    contador_amei += resposta_amei[i];
   } 
if(resposta_amei.length == 1 && resposta_bom.length == 1 && resposta_nao_gostei.length == 1 && resposta_odiei.length == 1){
resposta_amei.push(1);


if(botao_amei.classList.contains('borda-enquete')){
    botao_amei.classList.remove('borda-enquete');
    botao_amei.classList.add('menu-selecionado-enquete')
}
contador_amei = 0;

for(var i = 0; i < resposta_amei.length; i++){
    contador_amei += resposta_amei[i];
   }

amei_porcentagem = (contador_amei * 100) / resultado_porcentagem; 
div_exibir_resultado_pousando.innerHTML = `${amei_porcentagem.toFixed(0)}% das pessoas Amaram!`
div_resultado_pousando.style.display = 'block';
}


else if(resposta_amei.length > 1){ 

amei_porcentagem = (contador_amei * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pousando.innerHTML = `${amei_porcentagem.toFixed(0)}% das pessoas Amaram!`;
div_mensagem_pousando.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pousando.style.display = 'block';
        
}else{
amei_porcentagem = (contador_amei * 100) / resultado_porcentagem; 

div_mensagem_pousando.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pousando.innerHTML = `${amei_porcentagem.toFixed(0)}% das pessoas Amaram!`
div_resultado_pousando.style.display = 'block';
}

}

function bom(){
var contador_bom = 0;
for(var i = 0; i < resposta_bom.length; i++){
    contador_bom += resposta_bom[i];
   } 
if(resposta_amei.length == 1 && resposta_bom.length == 1 && resposta_nao_gostei.length == 1 && resposta_odiei.length == 1){
resposta_bom.push(1);


if(botao_bom.classList.contains('borda-enquete')){
    botao_bom.classList.remove('borda-enquete');
    botao_bom.classList.add('menu-selecionado-enquete')
}
contador_bom = 0;

for(var i = 0; i < resposta_bom.length; i++){
    contador_bom += resposta_bom[i];
   }

bom_porcentagem = (contador_bom * 100) / resultado_porcentagem; 
div_exibir_resultado_pousando.innerHTML = `${bom_porcentagem.toFixed(0)}% das pessoas acharam bom!`
div_resultado_pousando.style.display = 'block';
}


else if(resposta_bom.length > 1){ 

bom_porcentagem = (contador_bom * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pousando.innerHTML = `${bom_porcentagem.toFixed(0)}% das pessoas acharam bom!`;
div_mensagem_pousando.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pousando.style.display = 'block';
        
}else{
bom_porcentagem = (contador_bom * 100) / resultado_porcentagem; 

div_mensagem_pousando.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pousando.innerHTML = `${bom_porcentagem.toFixed(0)}% das pessoas acharam bom!`
div_resultado_pousando.style.display = 'block';
}

}

function nao_gostei(){
var contador_nao_gostei = 0;
for(var i = 0; i < resposta_nao_gostei.length; i++){
    contador_nao_gostei += resposta_nao_gostei[i];
   } 
if(resposta_amei.length == 1 && resposta_bom.length == 1 && resposta_nao_gostei.length == 1 && resposta_odiei.length == 1){
resposta_nao_gostei.push(1);


if(botao_nao_gostei.classList.contains('borda-enquete')){
    botao_nao_gostei.classList.remove('borda-enquete');
    botao_nao_gostei.classList.add('menu-selecionado-enquete')
}
contador_nao_gostei = 0;

for(var i = 0; i < resposta_nao_gostei.length; i++){
    contador_nao_gostei += resposta_nao_gostei[i];
   }

nao_gostei_porcentagem = (contador_nao_gostei * 100) / resultado_porcentagem; 
div_exibir_resultado_pousando.innerHTML = `${nao_gostei_porcentagem.toFixed(0)}% das pessoas não gostaram!`
div_resultado_pousando.style.display = 'block';
}


else if(resposta_nao_gostei.length > 1){ 

nao_gostei_porcentagem = (contador_nao_gostei * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pousando.innerHTML = `${nao_gostei_porcentagem.toFixed(0)}% das pessoas não gostaram!`
div_mensagem_pousando.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pousando.style.display = 'block';
        
}else{
nao_gostei_porcentagem = (contador_nao_gostei * 100) / resultado_porcentagem; 

div_mensagem_pousando.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pousando.innerHTML = `${nao_gostei_porcentagem.toFixed(0)}% das pessoas não gostaram!`
div_resultado_pousando.style.display = 'block';
}

}

function odiei(){
var contador_odiei = 0;
for(var i = 0; i < resposta_odiei.length; i++){
    contador_odiei += resposta_odiei[i];
   } 
if(resposta_amei.length == 1 && resposta_bom.length == 1 && resposta_nao_gostei.length == 1 && resposta_odiei.length == 1){
resposta_odiei.push(1);


if(botao_odiei.classList.contains('borda-enquete')){
    botao_odiei.classList.remove('borda-enquete');
    botao_odiei.classList.add('menu-selecionado-enquete')
}
contador_odiei = 0;

for(var i = 0; i < resposta_odiei.length; i++){
    contador_odiei += resposta_odiei[i];
   }

odiei_porcentagem = (contador_odiei * 100) / resultado_porcentagem; 
div_exibir_resultado_pousando.innerHTML = `${odiei_porcentagem.toFixed(0)}% das pessoas odiaram!`
div_resultado_pousando.style.display = 'block';
}


else if(resposta_odiei.length > 1){ 

odiei_porcentagem = (contador_odiei * 100) / resultado_porcentagem; 
        
div_exibir_resultado_pousando.innerHTML = `${odiei_porcentagem.toFixed(0)}% das pessoas odiaram!`
div_mensagem_pousando.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_resultado_pousando.style.display = 'block';
        
}else{
odiei_porcentagem = (contador_odiei * 100) / resultado_porcentagem; 

div_mensagem_pousando.innerHTML = `<b style='color: red;'>Você já votou nesta enquete!</b>`
div_exibir_resultado_pousando.innerHTML = `${odiei_porcentagem.toFixed(0)}% das pessoas odiaram!`
div_resultado_pousando.style.display = 'block';
}

}