import { ApplicationError } from "../../../application/shared/errors/ApplicationError";
import { Request, Response, NextFunction } from "../../webserver/CoreModules";

import config from "../../config";
import {ResultUseCaseInterface} from "../../../application/shared/result/ResultUseCaseInterface";
import {Result} from "../../../application/shared/useCase/BaseUseCase";

export default function () {
    return async function (
        err: ApplicationError,
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        const result :ResultUseCaseInterface = new Result();
        if (err?.name === "ApplicationError") {
            console.log("Controlled application error", err.message);
            result.SetError(err.message, err.errorCode);
        } else {
            console.log("No controlled application error", err);
            result.SetError(config.params.defaultError.message, config.params.defaultError.code);
        }
        if (res.headersSent) {
            return next(result);
        }
        res.status(Number(result.statusCode)).send(result);
    };
}