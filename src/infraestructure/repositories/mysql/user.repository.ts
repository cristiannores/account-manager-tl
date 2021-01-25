import {User} from "../../persistence/mysql/entities/User";
import {BaseRepository} from "../BaseRepository";

export class UserRepository extends BaseRepository<User>{

    constructor() {
        super();
        this._entity = User;

    }


}