import {EntityTarget, FindOneOptions, FindManyOptions, UpdateResult, DeleteResult} from "typeorm";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
import  {DatabaseClientInterface} from '../persistence/index';
import {InsertResult} from "typeorm/query-builder/result/InsertResult";

export interface BaseRepositoryInterface<T> {
    _client: DatabaseClientInterface;
    _entity: EntityTarget<T>;

    getAll(): Promise<T[]>;

    getById(id: number): Promise<T>;

    insert(entity: T): Promise<InsertResult>;


    updateById(where: QueryDeepPartialEntity<T>, changes: QueryDeepPartialEntity<T>): Promise<UpdateResult>

    getBy(options: FindOneOptions<T> | QueryDeepPartialEntity<T>): Promise<T>;

    getAllBy(entity: FindManyOptions<T>): Promise<T[]>;

    delete(entity: FindManyOptions<T>): Promise<DeleteResult>;

    recover(entity: T):any;
}