import {User} from "../../persistence/mysql/entities/User";
import {BaseRepository} from "../BaseRepository";
import {UserRepositoryInterface} from "./user.repository.interface";

export class UserRepository extends BaseRepository<User> implements  UserRepositoryInterface{

    constructor() {
        super();
        this._entity = User;

    }


}