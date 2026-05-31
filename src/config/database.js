import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.sqlite", (error) => {
  if (error) {
    console.log("Erro ao conectar ao banco de dados: ", error.message);
  } else {
    console.log("Banco de dados conectado com sucesso.");
  }
});

export default db;
