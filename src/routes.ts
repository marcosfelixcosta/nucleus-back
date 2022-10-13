import {Router, Request, Response} from 'express';

import {getUsuarios,saveUsuarios, getUsuario,updateUsuario,loginUser,getMail} from './controller/UsuerController';

import {finalizarChamados, getChamados, getCount, saveChamados} from './controller/ChamController';
import {getFabricante, saveFabricante} from './controller/FabController';
import {saveModelo} from './controller/ModController';
import {getPatrimonio, saveEquipamento} from './controller/EquiController';
import {saveDepartamento} from './controller/DepController';

import {Authenticate} from './controller/AuthUser';

const routes = Router();

routes.get('/', (request: Request, response: Response) =>{
    return response.json({message: 'Projeto Nucleus - API - PUC Minas'});
});

routes.post('/session', loginUser);
routes.post('/save', saveUsuarios);



routes.post('/savech',saveChamados);
routes.get('/count/:id',getCount);
routes.post('/savefab',saveFabricante);
routes.post('/savemod', saveModelo);
routes.post('/saveequi', saveEquipamento);
routes.post('/savedep',saveDepartamento);


routes.post('/verifica',getMail);
routes.post('/veripatri',getPatrimonio);
routes.post('/verifabri',getFabricante);
routes.get('/user/:id', getUsuario);
routes.put('/update/:id', updateUsuario);
routes.get('/chamados',getChamados);
routes.put('/finaliza/:id', finalizarChamados);




routes.use(Authenticate);

routes.get('/user', getUsuarios);



export default routes;

