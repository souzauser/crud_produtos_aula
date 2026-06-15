import produtoRepository from "../repositores/produto.repository.js";

async function findAllProdutoService() {
  const produtos = await produtoRepository.findAllProdutoRepository();
  return produtos;
}

async function createProdutService(novoProduto) {
  const produto = await produtoRepository.createProdutoRepository(novoProduto);

  if (!produto) {
    throw new Error("Erro ao criar novo produto!");
  } else {
    return produto;
  }
}

async function findProdutoByIdService(id) {
  const produto = await produtoRepository.findProdutoByIdRepository(id);

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  return produto;
}

async function updateProdutoService(id, produtoAtualizado) {
  const produto = await produtoRepository.findProdutoByIdRepository(id);
  if (!produto) {
    throw new Error("Produto não encontrado");
  }
  const produtoRetorno = await produtoRepository.updateProdutoRepository(
    id,
    produtoAtualizado,
  );

  if (!produtoRetorno) {
    throw new Error("Erro ao atualizar produto");
  }

  return produtoRetorno;
}

async function deleteprodutoService(id) {

  const produto = await produtoRepository.findAllProdutoRepository(id);

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  const mensagemRetorno = await produtoRepository.deleteProdutoRepository(id);

  if (!mensagemRetorno){

    throw new Error("Erro ao deletar produto!");

  }

  return mensagemRetorno;

};

export default {
  findAllProdutoService,
  createProdutService,
  findProdutoByIdService,
  updateProdutoService,
  deleteprodutoService
};
