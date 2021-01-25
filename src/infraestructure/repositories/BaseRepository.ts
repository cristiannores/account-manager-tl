import { EntityTarget, FindOneOptions, FindManyOptions} from "typeorm";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
import DatabaseClient, {DatabaseClientInterface} from '../persistence/index';

export class BaseRepository<T> {
    _client: DatabaseClientInterface ;
    _entity: EntityTarget<T>;
    constructor(  ) {
        this._client = DatabaseClient;
    }

    public async getAll ()  : Promise<T[]>{
        return await this._client.getManager().find<T>(this._entity);
    }

    public async getById(id: number) : Promise<T>{
        return await this._client.getManager().findOne<T>(this._entity, id);
    }

    public async insert(entity: T) {
        return await this._client.getManager().insert<T>(this._entity, entity);
    }

    public async updateById(where: QueryDeepPartialEntity<T>,   changes : QueryDeepPartialEntity<T> ) {
        return await this._client.getManager().update<T>(this._entity, where, changes );
    }

    public async getBy(options: FindOneOptions<T> | QueryDeepPartialEntity<T>) {
        return await this._client.getManager().findOne<T>(this._entity, options);
    }

    public async getAllBy(entity: FindManyOptions<T>) {
        return await this._client.getManager().find<T>(this._entity, entity);
    }

    public async delete( where : QueryDeepPartialEntity<T>, forceDelete = false) {
        if (forceDelete) {
            return await this._client.getManager().delete<T>(this._entity, where);
        } else {
            return await this._client.getManager().softDelete<T>(this._entity, where);
        }
    }

    public async recover(entity: T) {
        return await this._client.getManager().recover<T>(entity);
    }
}