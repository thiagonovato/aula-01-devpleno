const soma = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mult = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

const operacao = (operacao, num1, num2) => operacao(num1, num2)

let result = operacao(div, 9, 3)

console.log('Resultado: ', result)