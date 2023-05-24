import { Router } from "express";
import {inserirCidade, inserirPassagem, inserirHospedagem, listarCidades, listarHospedagens, listarPassagens, detalhesHospedagem, detalhesPassagem} from "../controllers/controllers.js";


const freelaRouter = Router()

freelaRouter.post("/cidades", inserirCidade)
freelaRouter.post("/passagens", inserirPassagem)
freelaRouter.post("/hospedagens", inserirHospedagem)
freelaRouter.get("/cidades", listarCidades)
freelaRouter.get("/passagens/cidade/:cidade_id", listarPassagens)
freelaRouter.get("/hospedagens/cidade/:cidade_id", listarHospedagens)
freelaRouter.get("/passagens/:id", detalhesPassagem)
freelaRouter.get("/hospedagens/:id", detalhesHospedagem)


export default freelaRouter