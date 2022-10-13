import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { entityEquipamento } from "../entity/entityEquipamento";

export const saveEquipamento = async (request: Request, response: Response)=> {

  const {eq_equipamento, eq_patrimonio, eq_datafabricacao, eq_status} = request.body;
  const equipamento = await getRepository(entityEquipamento).save({
    
    eq_equipamento, 
    eq_patrimonio,
    eq_datafabricacao,
    eq_status
    
  });

  return response.json(equipamento);


}

export const getPatrimonio = async (request: Request, response: Response) => {

  const {eq_patrimonio} = request.body;

    const getmail = await getRepository(entityEquipamento).find({where: {eq_patrimonio}});

      if (getmail.length ===1) {

       const data = {eq_patrimonio: getmail[0].eq_patrimonio}

         return response.json(data);
          } else {
            return response.status(404).json({ message: 'Patrimonio não encontrado!' });
                 }
  } 
