import { getRepository } from "typeorm";
import { entityFabricante } from "../entity/entityFabricante";
import { NextFunction, Response, Request } from "express";


export const saveFabricante = async (request: Request, response: Response) => {

  const { fb_fabricante, fb_telefone, fb_email, fb_logradouro, fb_bairro, fb_cidade, fb_estado, fb_contato, fb_observacao } = request.body;

  const fabricante = await getRepository(entityFabricante).save({

    fb_fabricante,
    fb_telefone,
    fb_email,
    fb_logradouro,
    fb_bairro,
    fb_cidade,
    fb_estado,
    fb_contato,
    fb_observacao

  });

  return response.json(fabricante);
}


export const getFabricante = async (request: Request, response: Response) => {

  const {fb_email} = request.body;

    const getmail = await getRepository(entityFabricante).find({where: {fb_email}});

      if (getmail.length ===1) {

       const data = {fb_email: getmail[0].fb_email}

         return response.json(data);
          } else {
            return response.status(404).json({ message: 'E-mail não encontrado!' });
                 }
  } 
