import {BaseRepository} from "../BaseRepository";
import {AccessModules} from "../../persistence/mysql/entities/AccessModules";

export class AccessModulesRepository extends BaseRepository<AccessModules>{

    constructor() {
        super();
        this._entity = AccessModules;

    }


}