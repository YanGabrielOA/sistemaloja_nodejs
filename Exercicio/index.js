import express from "express"
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

app.listen(8080, function (error) {
  if (error) {
    console.log("Ocorreu um erro!!!");
  } else {
    console.log("Servido Iniciado com Sucesso");
  }

  app.get("/", function (req, res) {
    res.render("index");
  });
  
});
