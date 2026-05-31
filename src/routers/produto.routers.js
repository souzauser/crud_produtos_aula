import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

const produtoRouter = Router();

produtoRouter.get("/produtos", produtoController.findAllProdutoController);

produtoRouter.post("/produtos", produtoController.createProdutoController);

export default produtoRouter;
