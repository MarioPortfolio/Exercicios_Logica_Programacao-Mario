const http = require("http") // modulo http é um objeto

const servidor = http.createServer(function(req, resp){ // metodos são funções, abre e fecha parenteses para invocar ele usando a função de callback
    var resposta = "Sejá bem-vindo, teste de node"

    resp.end(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Olá mundo!!!</h1>
                    <p>Resposta a: ${resposta}</p>
                </body>
            </html>
        
        `
    )

}) 

servidor.listen(3001)


