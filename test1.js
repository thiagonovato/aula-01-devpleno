console.log('Olá fullstack Lab - Thiago!')
// C-like
const soma = (num1, num2) => num1 + num2 // pure funcions

const mult = (num1, num2) => {
    return num1 * num2
}

// high order function
const operacao = (operacao, num1, num2) => {
    return operacao(num1, num2)
}

const obj = {
    key: 'valor'
}

const array = [1, 2, 3]

console.log('Soma: ', operacao(soma, 10, 20))
console.log('Mult: ', operacao(mult, 10, 20))