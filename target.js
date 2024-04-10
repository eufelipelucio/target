// Questão 1
let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Valor da variável SOMA:", SOMA);

// Questão 2
function pertenceSequenciaFibonacci(n) {
  let a = 0, b = 1;
  while (a <= n) {
    if (a === n) {
      return true;
    }
    let temp = a;
    a = b;
    b = temp + b;
  }
  return false;
}

let numero = parseInt(prompt("Informe um número:"));
if (pertenceSequenciaFibonacci(numero)) {
  console.log("O número informado pertence à sequência de Fibonacci.");
} else {
  console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

// Questão 3
// Respostas:
// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2, 10, 12, 16, 17, 18, 19, 20

// Questão 4
// Ligar um interruptor e esperar alguns minutos.
// Desligar o interruptor.
// Ligar um segundo interruptor e rapidamente entrar na sala das lâmpadas.

// Questão 5
function inverterString(string) {
  let invertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertida += string[i];
  }
  return invertida;
}

let entrada = prompt("Informe uma string:");
let saida = inverterString(entrada);
console.log("String invertida:", saida);
