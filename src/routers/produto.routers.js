import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";
import produtoRepository from "../repositores/produto.repository.js";

const produtoRouter = Router();

produtoRouter.get("/produtos", produtoController.findAllProdutoController);

produtoRouter.post("/produtos", produtoController.createProdutoController);

produtoRouter.get("/produtos/:id", produtoController.findProdutoByIdController);

produtoRouter.put("/produtos/:id", produtoController.updateProdutoController);

produtoRouter.delete("/produtos/:id", produtoController.deleteProdutoController);

export default produtoRouter;
