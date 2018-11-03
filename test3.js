const fs = require('fs')

const callback = (err, content) => {
    if (err) {
        console.log('error', err)
    } else {
        // callback hell
        // código haduken (código cresce pra frente)
        console.log(new String(content))
    }
}

fs.readFile('test1.js', callback)

console.log('fim do arquivo')