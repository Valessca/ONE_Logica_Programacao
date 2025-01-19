alert('Boas vindas ao nosso site!');
let nome = "Luana";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000

alert('Erro!Preencha todos os campos');
let mensagemDeErro = "Erro!Preencha todos os campos";
alert(mensagemDeErro);

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
  alert("Pode tirar a habilitação");
}






















// let numeroSecreto = parseInt(Math.random() * 11)
// let tentativas = 1
// let chute

// alert('Boas vindas ao jogo do número secreto')

// while (chute != numeroSecreto) {
//     let chute = prompt('Escolha um número entre 1 e 10')
//     if (chute == numeroSecreto) {
//         break
//     } else {
//         if (chute > numeroSecreto) {
//             alert('O número secreto é menor')
//         } else {
//             alert('O número secreto é maior')
//         }
//     }
//     tentativas++
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
// alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)