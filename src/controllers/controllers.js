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
    const hosp = hospedagens.rows.map((i) => ({
      id: i.id,
      nome: i.hotel,
      preco: i.preco_diaria,
  }));

    res.status(201).send(hosp);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function listarPassagens(req, res) {
  const { cidade_id } = req.params;
  try {
    const passagens = await db.query(`SELECT * FROM passagens WHERE cidade_id = $1;`, [cidade_id]);

    const pass = passagens.rows.map((i) => ({
      id: i.id,
      data: i.data,
      horario: i.horario_saida,
      preco: i.preco,
      localPartida: i.cidade_destino
  }));

    res.status(201).send(pass);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function detalhesHospedagem(req, res) {
  const { id } = req.params;
  try {
    const hosp = await db.query(`SELECT id, cidade_id, preco_diaria, hotel, foto,
    CASE WHEN cafe_da_manha THEN 'SIM' ELSE 'NAO' END AS cafe_da_manha_texto,
    CASE WHEN estacionamento THEN 'SIM' ELSE 'NAO' END AS estacionamento_texto
  FROM public.hospedagens;
  WHERE id = $1;`,[id])
    res.send(hosp.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function detalhesHospedagem(req, res) {
  const { id } = req.params;
  try {
    const hosp = await db.query(`
      SELECT cidade_id, preco_diaria, hotel, foto,
        CASE WHEN cafe_da_manha THEN 'SIM' ELSE 'NAO' END AS cafe_da_manha_texto,
        CASE WHEN estacionamento THEN 'SIM' ELSE 'NAO' END AS estacionamento_texto
      FROM hospedagens
      WHERE id = $1;`, [id]);
    res.send(hosp.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}


export async function detalhesPassagem(req, res) {
  const { id } = req.params;
  try {
    const pass = await db.query(`SELECT * FROM passagens WHERE id = $1;`,[id])
    res.status(201).send(pass.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
