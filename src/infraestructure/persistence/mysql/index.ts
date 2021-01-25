import {createConnection, EntityManager, getConnection, getConnectionOptions} from "typeorm";
import {DatabaseClientInterface} from "../index";

class DatabaseClient implements DatabaseClientInterface{

    async createDatabaseConnection(){
        await createConnection( );
        console.log('Database connected');
    }

    getManager() : EntityManager {
        return getConnection().manager;
    }

}

const instance = new DatabaseClient();

export default instance;