import {ResultUseCaseInterface} from "./ResultUseCaseInterface";

export class ResultUseCase<T> implements ResultUseCaseInterface {

    data: T | string;
    statusCode: number | string;
    success: boolean;
    message: string;
    error: string;
    SetStatusCode(statusCode: number | string, success: boolean) {
        this.statusCode = statusCode;
        this.success = success;
    };
    SetMessage(message: string, statusCode: number | string){
        this.message = message;
        this.statusCode = statusCode;
    };
    SetError(error: string | any, statusCode: number | string){
        this.error = error;
        this.statusCode = statusCode;
    };
    SetData(data: string | T, statusCode: number | string){
        this.data = data;
        this.statusCode = statusCode;
    };
    ToResult(){
        return {
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            error: this.error,
            data: this.data,
        }
    }
}
