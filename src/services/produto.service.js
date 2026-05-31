import produtoRepository from "../repositores/produto.repository.js";

async function findAllProdutoService() {
  const produtos = await produtoRepository.findAllProdutoRepository();
  return produtos;
}

async function createProdutService(novoProduto) {
  const produto = produtoRepository.createProdutoRepository(novoProduto);

  if (!produto) {
    throw new Error("Erro ao criar novo produto!");
  } else {
    return produto;
  }
}

export default {
  findAllProdutoService,
  createProdutService,
};
