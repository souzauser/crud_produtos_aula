import express from "express";
import produtoRouter from "./src/routers/produto.routers.js";

const app = express();

app.use(express.json());
app.use(produtoRouter);

app.listen(3000, () => {
  console.log("Servidor esta rodando na porta 3000");
});
