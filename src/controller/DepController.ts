import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { entityDepartamento } from "../entity/entityDepartamento";

export const saveDepartamento = async (request: Request, response: Response)=> {
  const {dp_departamento, dp_observacao} = request.body;

  const departamento = await getRepository(entityDepartamento).save({

    dp_departamento,
    dp_observacao

  });

  return response.json(departamento);

}