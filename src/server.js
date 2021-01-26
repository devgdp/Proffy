const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// Configurar nunckjuncks
const nunjunks = require('nunjucks')
nunjunks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor 
// Receber os dados do req.body
server.use(express.urlencoded({extended: true}))
// Configuração arquivos estaticos (CSS, Imagens, scripts)
server.use(express.static("public"))
    // Rotas da Aplicação 
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-class", saveClasses)
    //Start do servidor
    .listen(5500)

    

