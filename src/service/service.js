const express = require("express")
const path = require("path")
const startServer = (envs) =>{
  const app = express()

  app.use(express.static(`${envs.publicPath}/dist`))

  app.get("/Pagina_Principal", (req, res) => {
    const url = path.join(__dirname, "../../public/dist/index.html");
    res.sendFile(url)
  })

  app.listen(envs.port, () => {
    console.log("Escuchando el puerto: ", envs.port)
  })
}
module.exports = {
  startServer
}
