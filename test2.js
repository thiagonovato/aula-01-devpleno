// mono-thread
// thread = linha de execução
// dica: nunca trave a main thread

// event-loop
/*
- retorno arquivo
- usuário clicou
*/

console.log('passo1')

const ola = () => console.log('ola')
setTimeout(ola, 3000)

console.log('passo2')