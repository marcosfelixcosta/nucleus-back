import "reflect-metadata";
import './config/env';
import {createConnection} from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import routes from "./routes";
import { entityUsuario } from "./entity/entityUsuario";
import { entityChamados } from "./entity/entityChamados";
import { entityFabricante } from "./entity/entityFabricante";
import { entityModelo } from "./entity/entityModelo";
import { entityEquipamento } from "./entity/entityEquipamento";
import { entityDepartamento } from "./entity/entityDepartamento";

const app = express();

createConnection({
    type: "mysql",
    host: "n778cl5677747euasmy4dfhsql.mysql.da8988tabase.azure.com",
    port: 3306,
    username: "nucleu3489s",
    password: "cvbj45689**-55-622",
    database: "nucleus00795468.2db",
    entities: [
        entityUsuario,entityChamados,entityFabricante,
        entityModelo,entityEquipamento,entityDepartamento
        
    ],
    synchronize: true,
    extra: {
        ssl: true,
      },
    logging: false,
    
}).then(connection => {

}).catch(error => console.log(error));

app.use(cors());

app.use(bodyParser.json());
app.use(routes);

//app.listen(3010);
app.listen(process.env.PORT || 1337);

console.log("API Nucleus rodando na porta: 1337" );
