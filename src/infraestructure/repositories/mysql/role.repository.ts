import {BaseRepository} from "../BaseRepository";
import {Role} from "../../persistence/mysql/entities/Role";

export class RoleRepository extends BaseRepository<Role>{

    constructor() {
        super();
        this._entity = Role;

    }

}