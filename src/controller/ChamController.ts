import { getRepository } from "typeorm";
import { entityChamados } from "../entity/entityChamados";
import { NextFunction, Request, response, Response } from "express";


export const saveChamados = async (request: Request, response: Response ) => {

  const {ch_dataabertura, ch_prioridade, ch_descricao, ch_tipo, ch_categoria, ch_assunto } = request.body;

  const chamado = await getRepository(entityChamados).save ({
    ch_dataabertura, 
    ch_prioridade, 
    ch_descricao, 
    ch_tipo, 
    ch_categoria,
    ch_assunto

  });
  
  return response.json(chamado);


};

export const getChamados = async (request: Request, response: Response, next: NextFunction) => {

  const useracount = await getRepository(entityChamados).find();
  return response.json(useracount);

};


export const getCount = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params;
  const useracount = await getRepository(entityChamados).count({where: {ch_prioridade:id}});

  return response.json(useracount);

};

export const finalizarChamados = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params;

  const upuser = await getRepository(entityChamados).update(id, request.body);

  if (upuser.affected = 1) {
    const userupdate = await getRepository(entityChamados).findOne(id);
    return response.json({ message: 'Chamado Finalizado!' });
  };

  return response.status(404).json({ message: 'Chamado não encontrado!' });
};
