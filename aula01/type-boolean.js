//Type boolean
const primeiroValor = true;
const segundoValor = false; 
//= significa atribuição
//== comparação se o valor é igual
//=== compara o valor e o tipo do dado
const valorIgual = primeiroValor === segundoValor;
console.log(`${primeiroValor} == ${segundoValor}: ${valorIgual}`);

//Trusthy e Falsy
const terceiroValor = 0;
const quartoValor = '';

console.log(`Terceiro valor: ${terceiroValor == false}`);
console.log(`Terceiro valor: ${quartoValor == false}`);