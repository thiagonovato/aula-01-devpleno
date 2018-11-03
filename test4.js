
const fs = require('fs')

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}
/*
uma das formas de ler o arquivo

readFile('test1.js')
    .then(content => {
        console.log(content)
    }).catch(err => {
        console.log(err)
    })
*/

const processaArquivos = async () => {
    const file1 = await readFile('test1.js')
    console.log('file 1: ', file1)
    const file2 = await readFile('test2.js')
    console.log('file 2:', file2)
}

processaArquivos()