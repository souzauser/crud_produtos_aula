import produtoService from "../services/produto.service.js";
// Removi o 'import { response }...' do express pois você já o recebe como parâmetro nas funções!

async function findAllProdutoController(request, response) {
  try {
    // ADICIONADO: 'await' para esperar o banco de dados responder
    const produtos = await produtoService.findAllProdutoService();
    response.status(200).send({ produtos });
  } catch (error) {
    // Se der erro ao buscar, geralmente é um erro interno do servidor (500)
    response.status(500).send({ erro: error.message });
  }
}

async function createProdutoController(request, response) {
  const novoProduto = request.body;

  try {
    const produto = await produtoService.createProdutService(novoProduto);
    response.status(201).send(produto);
  } catch (error) {
    // CORRIGIDO: de 'error.mesage' para 'error.message'
    console.error("Erro capturado no controller:", error.message);

    // Tratando o erro de nome repetido (UNIQUE) com o status correto
    if (error.message.includes("UNIQUE")) {
      return response.status(409).send({
        erro: "Produto já está cadastrado.",
        mensagem: "Existe um produto com este nome no banco de dados.",
      });
    }

    // Para qualquer outro erro (banco offline, etc), manda status 500
    response.status(500).send({ erro: error.message });
  }
}

async function findProdutoByIdController(request, response) {
  const { id } = request.params;

  try {
    const produto = await produtoService.findProdutoByIdService(id);
    response.status(200).send({ produto });
  } catch (error) {
    response.status(404).send(error.message);
  }
}

async function updateProdutoController(request, response) {
  const { id } = request.params;
  const produtoAtualizado = request.body;

  try {
    const produto = await produtoService.updateProdutoService(
      id,
      produtoAtualizado,
    );

    response.status(200).send({ produto });
  } catch (error) {
    response.status(400).send(error.message);
  }
}

async function deleteProdutoController(request, response) {
  const { id } = request.params;

  try {
    const retorno = await produtoService.deleteprodutoService(id);
    response.status(200).send(retorno);
  } catch (error) {
    response.status(400).send(error.message);
  }
}

export default {
  findAllProdutoController,
  createProdutoController,
  findProdutoByIdController,
  updateProdutoController,
  deleteProdutoController,
};
