import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS produto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE,
        valor TEXT NOT NULL,
        tipo TEXT NOT NULL
    )
    
    `);

function findAllProdutoRepository() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM produto`, [], (error, rows) => {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
    });
  });
}

function createProdutoRepository(novoProduto) {
  return new Promise((resolve, reject) => {
    const { nome, valor, tipo } = novoProduto;

    db.run(
      `INSERT INTO produto(nome, valor, tipo) VALUES (?,?,?)`, // 1º argumento
      [nome, valor, tipo],                                      // 2º argumento
      
      function (error) { // <--- AQUI ELA COMEÇA {
        if (error) {
          reject(error);
        } else {
          resolve({ id: this.lastID });
        }
      } // <--- AQUI ELA TERMINA }
      
    );
  });
}

export default {
  findAllProdutoRepository,
  createProdutoRepository,
};
