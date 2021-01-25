
export { Request, Response, NextFunction } from "../../../infraestructure/webserver/CoreModules";
import { Router, Response, RouterType } from "../../../infraestructure/webserver/CoreModules";
import {ResultUseCaseInterface} from "../../../application/shared/result/ResultUseCaseInterface";


export default class BaseRouteController {
    constructor() {
        this.router = Router();
    }
    router: RouterType;
    HandleResult(res: Response, result : ResultUseCaseInterface ): void {

        if (result.success) {
            res
                .status(Number(result.statusCode))
                .json(result.message ? result.ToResult() : result.ToResult().data);
        } else {
            res.status(Number(result.statusCode)).json(result.ToResult());
        }
    }
}