alert("Bem vindo ao jogo do numero secreto");
let numeroMaximo = 5000;
let numeroSecreto  = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;


let tentativas = 1;


while (chute != numeroSecreto) {
      
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
   
    if (chute == numeroSecreto) {
       break;
    } else {
       
        if(chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
    
} 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
   
  



//É importante lembrar que, quando o projeto ficar disponível para todas as pessoas, 
//o que chamamos no contexto de software de ambiente de produção, os comandos [console.log] 
//devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    