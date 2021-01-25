import {BaseRepository} from "../BaseRepository";
import {Login} from "../../persistence/mysql/entities/Login";

export class LoginRepository extends BaseRepository<Login>{

    constructor() {
        super();
        this._entity = Login;

    }


}