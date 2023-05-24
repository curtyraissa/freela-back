import { Router } from "express";
import {inserirCidades, inserirPassagens, inserirHospedagens, listarHospedagens, listarPassagens, detalhesHospedagem, detalhesPassagem} from "../controllers/controllers.js";


const freelaRouter = Router()

freelaRouter.post("/cidades", inserirCidades)
freelaRouter.post("/passagens", inserirPassagens)
freelaRouter.post("/hospedagens", inserirHospedagens)
freelaRouter.get("/passagens/:cidade_id", listarPassagens)
freelaRouter.get("/hospedagens/:cidade_id", listarHospedagens)
freelaRouter.get("/passagens/:cidade_id/:passagem_id", detalhesPassagem)
freelaRouter.get("/hospedagens/:cidade_id/:hospedagem_id", detalhesHospedagem)


export default freelaRouter