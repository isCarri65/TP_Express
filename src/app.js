const { envs } = require("./config/envs.js");
const {  startServer } = require("./service/service.js");

const main =()=>{
  startServer(envs)
}
(async () => {
  main();
})();