//criando o header  

const header = document.createElement('header');

// Define os atributos do header

header.setAttribute('id', 'header')


header.style.width = '100vw';
header.style.height = '-100vh';
header.style.backgroundColor = '#979393';
header.style.display = 'flex'
header.style.justifyContent = 'center';
header.style.alignItems = 'center';
document.body.appendChild(header);

//criando img

const img = document.createElement('img');

img.style.width = '91px';
img.style.height = '91px';


img.src = 'img/imc-removebg-preview.png'

//colocando no header

header.appendChild(img);


// criando um form

const form = document.createElement('form');

form.setAttribute('id', 'formulario');
form.style.height = '-100vh'
document.body.appendChild(form);


//cariando uma div dentro do form

const div = document.createElement('div');

div.setAttribute('id', 'divprimaria')
div.style.display = 'flex'
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.marginTop = '200px'

form.appendChild(div);

//criando o input nome

const nome = document.createElement('input');

nome.setAttribute('id', 'nome');

nome.type = 'text'
nome.placeholder = 'Digite seu nome';

nome.style.width = '371px'
nome.style.height = '43px'
nome.style.borderRadius = '10px'
nome.style.marginRight = '20px'
div.appendChild(nome);

//criando input idade

const idade = document.createElement('input');
idade.setAttribute('id', 'idade')
idade.type = 'number';
idade.placeholder = 'idade';
idade.style.width = '60px'
idade.style.height = '43px'
idade.style.borderRadius = '9px'



div.appendChild(idade);

//criando btn

const submitButton = document.createElement('button');
submitButton.setAttribute('id', 'calcular')
submitButton.type = 'button';
submitButton.innerText = 'Calcular';
submitButton.style.width = '128px'
submitButton.style.height = '43px'
submitButton.style.backgroundColor = '#ED3030'
submitButton.style.position = 'absolute'
submitButton.style.marginTop = '150px'
submitButton.style.marginLeft = '400px'
submitButton.style.borderRadius = '9px'
div.appendChild(submitButton);


//criando uma 2 div

const div2 = document.createElement('div');

div2.setAttribute('id', 'secundaria');
div2.style.display = 'flex';
div2.style.justifyContent = 'center';
div2.style.alignItems = 'center';
div2.style.marginRight = '140px'
div2.style.marginTop = '30px'

form.appendChild(div2);

// criando input altura

const altura = document.createElement('input');
altura.type = 'number';
altura.step = '0.01'
altura.setAttribute('id', 'altura')
altura.placeholder = 'Digite sua altura';
altura.style.width = '204px'
altura.style.height = '43px'
altura.style.borderRadius = '9px'
altura.style.Right = '50px'

div2.appendChild(altura);

// criando input peso

const peso = document.createElement('input');
peso.type = 'number';
peso.setAttribute('id', 'peso')
peso.placeholder = 'Peso';
peso.style.width = '83px';
peso.style.height = '43px';
peso.style.borderRadius = '9px';
peso.style.marginLeft = '30px'
div2.appendChild(peso);

// linha

const linha = document.createElement('hr');

linha.style.marginTop = '80px'

document.body.appendChild(linha);

// criando uma div 

const div3 = document.createElement('div');
div3.setAttribute('id', 'secundaria');

div3.style.width = '100vw'
div3.style.height = '55px'
div3.style.backgroundColor = '#968B8B'


document.body.appendChild(div3)


// criando container para respostas

const div4 = document.createElement('div');

div4.setAttribute.class = 'main'

div4.style.width = '200px'
div4.style.height = '200px'

document.body.appendChild(div4);

submitButton.addEventListener("click", function() {
   
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  // Calcular o IMC
  const imc = peso / (altura ** 2).toFixed(1);

 const saida = document.createElement('div');
 saida.style.display = "flex";
    saida.style.justifyContent = "center";
    saida.style.width = "70%";
    saida.style.margin = ".5% 1%";
    saida.style.padding = "1% 1%";
    saida.style.border = "2px solid #141301";
    saida.style.borderRadius = "4px";
 div4.appendChild(saida);

 if(imc < 18.5){
  saida.style.backgroundColor = 'orange';
  saida.textContent = `Olá, ${nome}! Seu IMC é ${imc}.`;

 }else if(imc >= 18.5 && imc < 24.9){
  saida.style.backgroundColor = 'blue';
  saida.textContent = `Olá, ${nome}! Seu IMC é ${imc}.`;

 }else if(imc >= 25.0 && imc < 29.9){
  saida.style.backgroundColor = 'green';
  saida.textContent = `Olá, ${nome}! Seu IMC é ${imc}.`;

 }else if(imc >= 30.0 && imc < 39.9){
  saida.style.backgroundColor = 'Yellow';
  saida.textContent = `Olá, ${nome}! Seu IMC é ${imc}.`;

 }else if(imc > 40.0){
  saida.style.backgroundColor = 'red';
  saida.textContent = `Olá, ${nome}! Seu IMC é ${imc}.`;
 }

 setTimeout(function() {
   saida.style.display = 'none';
 }, 5000); 



});




 
  


//criando o footer

const footer = document.createElement('footer');
footer.style.width = '100vw'
footer.style.height = '80px'
footer.style.backgroundColor = '#979393'
footer.style.display = 'flex';
footer.style.justifyContent = 'space-around'
document.body.appendChild(footer);

// criando uma div para o azul no footer

const div_azul = document.createElement('div');
div_azul.style.display = 'flex'
footer.appendChild(div_azul)

//imagem azul
const azul = document.createElement('img');


azul.style.width = '80px';
azul.style.height = '80px';


azul.src = 'img/Azul.png2.PNG'
div_azul.appendChild(azul);

//criando uma div para verde
const div_verde = document.createElement('div');
div_verde.style.display = 'flex'
footer.appendChild(div_verde);

//imagem verde

const verde = document.createElement('img');


verde.style.width = '80px';
verde.style.height = '80px';


verde.src = 'img/verde.png'
div_verde.appendChild(verde);


//criando uma div para amarelo

const div_amarelo = document.createElement('div');
div_amarelo.style.display = 'flex'
footer.appendChild(div_amarelo)

//img amarelo

const amarelo = document.createElement('img');


amarelo.style.width = '80px';
amarelo.style.height = '80px';


amarelo.src = 'img/amarelo.png'
div_amarelo.appendChild(amarelo);

//criando uma div para vermelho
const div_vermelho = document.createElement('div');
div_vermelho.style.display = 'flex'
footer.appendChild(div_vermelho)



//img vermelho

const vermelho = document.createElement('img');


vermelho.style.width = '80px';
vermelho.style.height = '80px';


vermelho.src = 'img/vermelho.png'
div_vermelho.appendChild(vermelho);

// criando div_laranja
const div_laranja = document.createElement('div');
div_laranja.style.display = 'flex'
footer.appendChild(div_laranja)


//img laranja
const laranja = document.createElement('img');


laranja.style.width = '80px';
laranja.style.height = '80px';


laranja.src = 'img/laranja.png'
div_laranja.appendChild(laranja);

//graus por imc

const paragrafo = document.createElement('h1');
paragrafo.textContent = 'Normal'
paragrafo.style.fontSize = '100%'
div_azul.appendChild(paragrafo)
//
const paragrafo2 = document.createElement('h1');
paragrafo2.textContent = 'SOBREPESO'
paragrafo2.style.fontSize = '100%'
div_verde.appendChild(paragrafo2)
//
const paragrafo3 = document.createElement('h1');
paragrafo3.textContent = 'OBESIDADE'
paragrafo3.style.fontSize = '100%'
div_amarelo.appendChild(paragrafo3)
//
const paragrafo4 = document.createElement('h1');
paragrafo4.textContent = 'OBESIDADE GRAVE'
paragrafo4.style.fontSize = '100%'
div_vermelho.appendChild(paragrafo4)
//
const paragrafo5 = document.createElement('h1');
paragrafo5.textContent = 'MAGREZA'
paragrafo5.style.fontSize = '100%'
div_laranja.appendChild(paragrafo5)