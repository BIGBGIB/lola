let peso =parseFloat(prompt('Informe seu peso:'));
let altura =parseFloat(prompt('Informe sua altura:'));

function calculoImc(p, a) {
    return  p/(a*a);
} 

let imc = calculoImc(peso, altura); 

alert (`Seu IMC: ${imc.toFixed(2)}`);
///////////////////////////////////////////////////////////

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i; // Equivalente a: numero = numero * 2;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = parseInt(prompt('Informe um numero de 1 a 10:'));
  let resultado = calcularFatorial(numero);
  alert(`O fatorial de ${numero} é ${resultado}`);
  ///////////////////////////////////////////////////////////

 function conversordolar(valor) {
    return valor * 4.80
 }

 let dolar = parseFloat(prompt('Informe o valor em dolar:'));
 let conversao = conversordolar(dolar);
 alert(`O valor em dolar corresponde a ${conversao.toFixed(2)} reais`);
 ///////////////////////////////////////////////////////////////////

 function calcularAreaePerimetro(largura, altura) {
   let area = largura * altura;
   let perimetro = 2*(altura + largura);
   alert(`O valor da área do retangulo é ${area}`);
   alert(`O valor do perimetro do retangulo é ${perimetro} `);
 }

 let alt = parseInt(prompt('Informe a altura:'));
 let largura = parseInt(prompt('Informe a largura:'));
 calcularAreaePerimetro(largura, alt);
 ///////////////////////////////////////////////////////////

 
 function calcularAreaePerimetroc(raio) {
    let area = 3.14*raio * raio;
    let perimetro = raio * 2 * 3.14;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    alert(`O valor da área do circulo é ${area.toFixed(2)}`);
    alert(`O valor do perimetro do circulo é ${perimetro.toFixed(2)} `);
  }
 
  let raio = parseFloat(prompt('Informe o raio:'));
  calcularAreaePerimetroc(raio);
/////////////////////////////////////////////////////////////////
  function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      alert (`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let entrada = parseInt(prompt('Informe um numero de 1 a 10:'));
  mostrarTabuada(entrada);
///////////////////////////////////////////////////////////////////
let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
linguagensDeProgramacao.push('Java','Ruby','Golang');//add elementos
console.log(linguagensDeProgramacao);
console.log(linguagensDeProgramacao[0]);//chamar o primeiro elemento
console.log(linguagensDeProgramacao[1]);//chamar o segundo elemento
console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1]);//chamar o ultimo elemento