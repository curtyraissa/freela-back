import { db } from "../database/database.config.js";
// import {cadastroSchema, loginSchema, urlSchema} from "../schemas/schemas.js";

export async function inserirCidade(req, res) {
  const {nome}= req.body

  try{
    await db.query(`INSERT INTO cidades (nome) VALUES ($1)`,[nome]);

  return res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message);
  }
}

