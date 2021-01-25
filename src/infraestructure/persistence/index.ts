import DatabaseClient  from './mysql/index';
import {EntityManager} from "typeorm";

export  interface DatabaseClientInterface {
    createDatabaseConnection : () => Promise<void>;
    getManager : () => EntityManager;
}

export default DatabaseClient;