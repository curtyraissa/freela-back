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

export async function inserirPassagem(req, res) {
    const {cidade_id, preco, cia_aerea, data, horario_saida, horario_chegada, cidade_origem, cidade_destino}= req.body
  
    try{
      await db.query(`INSERT INTO cidades (cidade_id, preco, cia_aerea, data, horario_saida, horario_chegada, cidade_origem, cidade_destino) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,[cidade_id, preco, cia_aerea, data, horario_saida, horario_chegada, cidade_origem, cidade_destino]);
  
    return res.sendStatus(201)
    } catch (err) {
      res.status(500).send(err.message);
    }
}

export async function inserirHospedagem(req, res) {
    const {cidade_id, preco_diaria, hotel, foto, cafe_da_manha, estacionamento}= req.body
  
    try{
      await db.query(`INSERT INTO cidades (cidade_id, preco_diaria, hotel, foto, cafe_da_manha, estacionamento) VALUES ($1, $2, $3, $4, $5, $6)`,[cidade_id, preco_diaria, hotel, foto, cafe_da_manha, estacionamento]);
  
    return res.sendStatus(201)
    } catch (err) {
      res.status(500).send(err.message);
    }
}

export async function listarCidades(req, res) {

  try{
    const cidades = await db.query(`SELECT * FROM cidades`);

  return res.status(201).send(cidades.rows)
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function listarHospedagens(req, res) {
  const { cidade_id } = req.params;
  try {
    const hospedagens = await db.query(`SELECT * FROM hospedagens WHERE cidade_id = $1;`, [cidade_id]);
    res.send(hospedagens.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function listarPassagens(req, res) {
  const { cidade_id } = req.params;
  try {
    const passagens = await db.query(`SELECT * FROM passagens WHERE cidade_id = $1;`, [cidade_id]);
    res.send(passagens.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function detalhesHospedagem(req, res) {

}

export async function detalhesPassagem(req, res) {

}
