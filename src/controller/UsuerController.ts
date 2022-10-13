import { getRepository } from 'typeorm';
import { entityUsuario } from '../entity/entityUsuario';
import { NextFunction, Request, Response } from "express";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';




export const loginUser = async (request: Request, response: Response) => {

  const { email, senha } = request.body;

  const userlogin = await getRepository(entityUsuario).find({
    where: {
      email
    }
  });

    if (userlogin.length === 1) {

      if (await bcrypt.compare(senha, userlogin[0].senha)) {
        const token = jwt.sign({ id: userlogin[0].codigo }, process.env.APP_SECRET, {
          expiresIn: '1d'
        });

        const data = {
          id: userlogin[0].codigo,
          nome: userlogin[0].nome,
          email: userlogin[0].email,
          token
        }

        return response.json(data);
      } else {
        return response.status(404).json({ message: 'Usuário não encontrado!' });
      }

  } else {

    return response.status(404).json({ message: 'Usuário não encontrado!' });

  }
}

// Função que retorna todos os usuários
export const getUsuarios = async (request: Request, response: Response, next: NextFunction) => {

  const useracount = await getRepository(entityUsuario).find();
  return response.json(useracount);

};


export const getMail = async (request: Request, response: Response) => {

  const {email} = request.body;

    const getmail = await getRepository(entityUsuario).find({where: {email}});

      if (getmail.length ===1) {

       const data = {email: getmail[0].email}

         return response.json(data);
          } else {
            return response.status(404).json({ message: 'Email não encontrado!' });
                 }
  } 

// Função que retorna o usuário informado no ID
export const getUsuario = async (request: Request, response: Response, next: NextFunction) => {

  const { id } = request.params;
  const userid = await getRepository(entityUsuario).findOne(id);
  return response.json(userid);
};


export const saveUsuarios = async (request: Request, response: Response) => {

  const { nome, logradouro, bairro, cidade, estado, telefone, email, senha, acesso, status } = request.body;
  const passswordHash = await bcrypt.hash(senha, 8);

  const user = await getRepository(entityUsuario).save({
    nome,
    logradouro,
    bairro,
    cidade,
    estado,
    telefone,
    email,
    senha: passswordHash,
    acesso,
    status
  });


  return response.json(user);

 };

/*

//Função salvar usuário
export const saveUsuarios = async (request: Request, response: Response) => {
  const user = await getRepository(userAcount).save(request.body);
  return response.json(user);

};
*/

export const updateUsuario = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params;
  const upuser = await getRepository(entityUsuario).update(id, request.body);

  if (upuser.affected = 1) {
    const userupdate = await getRepository(entityUsuario).findOne(id);
    return response.json(userupdate);
  };

  return response.status(404).json({ message: 'Usuário não encontrado!' });
};


export const desativarUser = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params;

  const upuser = await getRepository(entityUsuario).update(id, {
    //status:true;
  });

  if (upuser.affected = 1) {
    const userupdate = await getRepository(entityUsuario).findOne(id);
    return response.json({ message: 'Usuário desativado' });
  };

  return response.status(404).json({ message: 'Usuário não encontrado!' });
};


export const excluirUser = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params;

  const upuser = await getRepository(entityUsuario).delete(id);

  if (upuser.affected = 1) {
    const userupdate = await getRepository(entityUsuario).findOne(id);
    return response.json({ message: 'Usuário removido' });
  };

  return response.status(404).json({ message: 'Usuário não encontrado!' });
};

