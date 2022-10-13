import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { entityModelo } from "../entity/entityModelo";

export const saveModelo = async (request: Request, response: Response) => {

  const { md_modelo, md_categoria, md_observacao} = request.body;

  const modelo = await getRepository(entityModelo).save({
    md_modelo, md_categoria, md_observacao

  });

  return response.json(modelo);

}


