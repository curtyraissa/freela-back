import { Router } from "express";
import {inserirCidade, inserirPassagem, inserirHospedagem, listarHospedagens, listarPassagens, detalhesHospedagem, detalhesPassagem} from "../controllers/controllers.js";


const freelaRouter = Router()

freelaRouter.post("/cidades", inserirCidade)
freelaRouter.post("/passagens", inserirPassagem)
freelaRouter.post("/hospedagens", inserirHospedagem)
freelaRouter.get("/passagens/:cidade_id", listarPassagens)
freelaRouter.get("/hospedagens/:cidade_id", listarHospedagens)
freelaRouter.get("/passagens/:cidade_id/:passagem_id", detalhesPassagem)
freelaRouter.get("/hospedagens/:cidade_id/:hospedagem_id", detalhesHospedagem)


export default freelaRouter