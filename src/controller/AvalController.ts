import { AdvancedConsoleLogger, getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { entityAvaliacao } from "../entity/entityAvaliacao";

export const saveAvaliacao = async (request: Request, response: Response)=> {
  const {/* coloca aqui os campos do entidade de dados - entityAvaliacao */} = request.body;
  const avaliacao = await getRepository(entityAvaliacao).save({

   /* coloca aqui os campos do entidade de dados - entityAvaliacao */

  });

  return response.json(avaliacao);


}
